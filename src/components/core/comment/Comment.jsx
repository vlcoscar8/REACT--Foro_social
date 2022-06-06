import React, { useEffect, useState } from "react";
import ButtonRepply from "../../shared/button-repply/ButtonRepply";
import { environment } from "../../../environment/environment";
import { Link } from "react-router-dom";

const Comment = ({ comment, isComment }) => {
    const [user, setUser] = useState();
    const [reply, setReply] = useState();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (isComment) {
            try {
                fetch(`${environment.API_URL}/user/${comment.user}`)
                    .then((res) => res.json())
                    .then((data) => {
                        setUser(data);
                        setIsLoaded(true);
                    });
            } catch (error) {
                console.log(error);
            }
        } else {
            try {
                fetch(`${environment.API_URL}/comment/${comment}`)
                    .then((res) => res.json())
                    .then((data) => {
                        setReply(data);

                        fetch(`${environment.API_URL}/user/${data.user[0]}`)
                            .then((res) => res.json())
                            .then((data) => {
                                setUser(data);
                                setIsLoaded(true);
                            });
                    });
            } catch (error) {
                console.log(error);
            }
        }
    }, []);

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
                        {isComment ? <ButtonRepply /> : ""}
                    </div>
                </figure>
            ) : (
                <h1>Is loading</h1>
            )}
        </>
    );
};

export default Comment;
