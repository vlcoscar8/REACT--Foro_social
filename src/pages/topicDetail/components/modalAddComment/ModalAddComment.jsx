import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { environment } from "../../../../environment/environment";
import { getTopicDetail } from "../../../../state/actions/topicActions";
import { AuthStateContext } from "../../../../state/context/authStateContext";

const ModalAddComment = ({
    showModalFunction,
    commentType,
    keyComment,
    topicDetail,
}) => {
    const { userLogged, userData } = useContext(AuthStateContext);
    const [bodyRequest, setBodyRequest] = useState();
    const dispatch = useDispatch();

    // Hide the comment modal
    const handleShowModal = () => {
        showModalFunction(false);
    };

    // Toggle the body request depending on the button clicked between comment or reply
    const handleInputChange = (e) => {
        const body = {
            content: e.target.value,
            topic: commentType === "comment" ? keyComment : "",
            commentId: commentType === "reply" ? keyComment : "",
        };
        setBodyRequest(body);
    };

    // Call the fetch function with the body request setted before depending on the comment or reply button
    const sendData = (e) => {
        e.preventDefault();
        addCommentOrReplyFunction(userLogged.userId, bodyRequest);
    };

    // Fetch function to post the comment or reply data
    const addCommentOrReplyFunction = (userId, bodyRequest) => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bodyRequest),
        };

        fetch(
            `${environment.API_URL}/user/${
                bodyRequest.topic !== "" ? "comment" : "reply"
            }/${userId}`,
            requestOptions
        )
            .then((res) => res.json())
            .then(() => dispatch(getTopicDetail(topicDetail[0].id)));

        showModalFunction(false);
    };

    return (
        <>
            <section className="modal-comment">
                <button onClick={handleShowModal} className="btn__close">
                    <FontAwesomeIcon icon={faXmark} className="icon" />
                </button>
                <div className="modal-comment__info">
                    <h2 className="modal-comment__info--username">
                        Hi {userData.username} 😊
                    </h2>
                    <p className="modal-comment__info--topic">
                        {topicDetail[0].title}
                    </p>
                </div>
                <h2 className="modal-comment__title">
                    Write your {commentType}:
                </h2>
                <form className="modal-comment__form" onSubmit={sendData}>
                    <label>
                        <textarea
                            name="textarea"
                            onChange={handleInputChange}
                            placeholder="Maximum 200 characters"
                        />
                    </label>
                    <button className="modal-comment__form--btn" type="submit">
                        Send
                    </button>
                </form>
            </section>
            <div className="modal-comment__overlay"></div>
        </>
    );
};

export default ModalAddComment;
