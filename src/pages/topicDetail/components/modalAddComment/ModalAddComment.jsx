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
    const { userLogged } = useContext(AuthStateContext);
    const [bodyRequest, setBodyRequest] = useState();

    const dispatch = useDispatch();

    const handleShowModal = () => {
        showModalFunction(false);
    };

    const handleInputChange = (e) => {
        const body = {
            content: e.target.value,
            topic: commentType === "comment" ? keyComment : "",
            commentId: commentType === "reply" ? keyComment : "",
        };
        setBodyRequest(body);
    };

    const sendData = (e) => {
        e.preventDefault();
        addCommentOrReplyFunction(userLogged.userId, bodyRequest);
    };

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
            .then((data) => console.log(data))
            .finally((e) => dispatch(getTopicDetail(topicDetail[0].id)));

        showModalFunction(false);
    };

    return (
        <>
            <section className="modal-comment">
                <button onClick={handleShowModal} className="btn__close">
                    <FontAwesomeIcon icon={faXmark} className="icon" />
                </button>
                <form className="modal-comment__form" onSubmit={sendData}>
                    <label>
                        <p>Content</p>
                        <textarea
                            name="textarea"
                            rows="10"
                            cols="50"
                            onChange={handleInputChange}
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
