import React, { useContext } from "react";
import ButtonRepply from "../../../../components/shared/button-repply/ButtonRepply";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { useToggleComment } from "../../../../customHooks/useToggleComment";
import { AuthStateContext } from "../../../../state/context/authStateContext";

const Comment = ({ comment, isComment, showModalFunction }) => {
    const { user, reply, isLoaded } = useToggleComment(isComment, comment);
    const { userLogged } = useContext(AuthStateContext);

    return (
        <>
            {isLoaded ? (
                <figure className={isComment ? "comment" : "reply"}>
                    <Link
                        to={`/user/${user.username}`}
                        className={isComment ? "comment__user" : "reply__user"}
                    >
                        <img
                            src={user.avatarProfile}
                            alt={"Avatar image from" + user.username}
                            className={
                                isComment
                                    ? "comment__user--img"
                                    : "reply__user--img"
                            }
                        />
                        <div
                            className={
                                isComment
                                    ? "comment__user--info"
                                    : "reply__user--info"
                            }
                        >
                            <h2 className="username">{user.username}</h2>
                            <p className="data">
                                {isComment
                                    ? comment.data.split("G")[0]
                                    : reply.data.split("G")[0]}
                            </p>
                        </div>
                    </Link>
                    <div
                        className={
                            isComment ? "comment__content" : "reply__content"
                        }
                    >
                        <p
                            className={
                                isComment
                                    ? "comment__content--text"
                                    : "reply__content--text"
                            }
                        >
                            {isComment ? comment.content : reply.content}
                        </p>
                        {isComment && userLogged.loggedIn && (
                            <ButtonRepply
                                showModalFunction={showModalFunction}
                                commentId={comment.id}
                            />
                        )}
                        {isComment && (
                            <div className="comment__content--replies">
                                <FontAwesomeIcon
                                    icon={faMessage}
                                    className="icon"
                                />
                                <p className="counter">
                                    {comment.replies.length}
                                </p>
                            </div>
                        )}
                    </div>
                </figure>
            ) : (
                <h1>Is loading</h1>
            )}
        </>
    );
};

export default Comment;
