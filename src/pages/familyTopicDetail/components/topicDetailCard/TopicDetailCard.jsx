import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import BtnFollow from "../../../../components/shared/button-follow/BtnFollow";
import { environment } from "../../../../environment/environment";

const TopicDetailCard = ({ topic }) => {
    const [user, setUser] = useState();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const userId = topic.user[0];

        try {
            fetch(`${environment.API_URL}/user/${userId}`)
                .then((res) => res.json())
                .then((data) => {
                    setUser(data);
                    setIsLoaded(true);
                });
        } catch (error) {
            console.log(error);
        }
    }, [topic]);

    return (
        <>
            {isLoaded ? (
                <Link to={`/topic/${topic.id}`} className="topic-card">
                    <figure className="topic-card__header">
                        <div className="topic-card__header--user">
                            <img
                                src={user.avatarProfile}
                                alt={user.username + "avatar"}
                                className="img"
                            />
                            <h3 className="user">{user.username}</h3>
                        </div>
                        <div className="topic-card__header--title">
                            <h2 className="title">{topic.title}</h2>
                        </div>
                        <div className="topic-card__header--info">
                            <div className="messages">
                                <FontAwesomeIcon
                                    icon={faMessage}
                                    className="icon"
                                />
                                <p className="counter">
                                    {topic.comments.length}
                                </p>
                            </div>
                            <div className="followers">
                                <FontAwesomeIcon
                                    icon={faUserPlus}
                                    className="icon"
                                />
                                <p className="counter">
                                    {topic.followers.length}
                                </p>
                            </div>
                            <BtnFollow page="card" />
                        </div>
                    </figure>
                    <picture className="topic-card__background">
                        <img
                            src={topic.wallpaper}
                            alt={topic.title + "image"}
                            className="topic-card__background--img"
                        />
                    </picture>
                </Link>
            ) : (
                <h1>Is loading...</h1>
            )}
        </>
    );
};

export default TopicDetailCard;
