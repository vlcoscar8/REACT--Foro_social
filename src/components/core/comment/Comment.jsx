import React, { useEffect, useState } from "react";
import ButtonRepply from "../../shared/button-repply/ButtonRepply";

const API_URL = "https://foro-api-oscar.herokuapp.com";

const Comment = ({ comment }) => {
    const [user, setUser] = useState();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        try {
            fetch(`${API_URL}/user/${comment.user}`)
                .then((res) => res.json())
                .then((data) => {
                    setUser(data);
                    setIsLoaded(true);
                });
        } catch (error) {
            console.log(error);
        }
    }, [comment]);

    const dataArray = comment.data.split(" ");
    // const now = Date.now();

    const data =
        dataArray[0] +
        " " +
        dataArray[1] +
        " " +
        dataArray[2] +
        " " +
        dataArray[3];
    return (
        <>
            {isLoaded ? (
                <figure className="comment">
                    <div className="comment__user">
                        <img
                            src={user.avatarProfile}
                            alt={"Avatar image from" + user.username}
                            className="comment__user--img"
                        />
                        <div className="comment__user--info">
                            <h2 className="username">{user.username}</h2>
                            <p className="data">{data}</p>
                        </div>
                    </div>
                    <div className="comment__content">
                        <p className="comment__content--text">
                            {comment.content}
                        </p>
                        <ButtonRepply />
                    </div>
                </figure>
            ) : (
                <h1>Is loading</h1>
            )}
        </>
    );
};

export default Comment;
