import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import BtnFollow from "../../../../components/shared/button-follow/BtnFollow";
import BtnComment from "../../../../components/shared/button-comment/BtnComment";
import { Link } from "react-router-dom";
import { AuthStateContext } from "../../../../state/context/authStateContext";

const TopicHeader = ({ topic, owner, showModalFunction }) => {
    const { userLogged, userData } = useContext(AuthStateContext);

    return (
        <>
            <picture className="topic__header">
                <img
                    src={topic.wallpaper}
                    alt={topic.title + "Wallpaper"}
                    className="topic__header--img"
                />
                <Link
                    to={`/user/${owner.username}`}
                    className="topic__header--user"
                >
                    <img
                        src={owner.avatarProfile}
                        alt={owner.username + "avatar image"}
                        className="img"
                    />
                    <h3 className="username">{owner.username}</h3>
                </Link>
            </picture>
            <figure className="topic__header-card">
                <div className="topic__header-card--title">
                    <h1 className="title">{topic.title}</h1>
                </div>
                <div className="topic__header-card--info">
                    <div className="icons">
                        <FontAwesomeIcon icon={faMessage} className="icon" />
                        <p className="counter">{topic.comments.length}</p>
                    </div>
                    <div className="icons">
                        <FontAwesomeIcon icon={faUserPlus} className="icon" />
                        <p className="counter">{topic.followers.length}</p>
                    </div>
                </div>

                <div className="topic__header-card--buttons">
                    {userLogged.loggedIn && (
                        <>
                            <BtnComment
                                showModalFunction={showModalFunction}
                                topicTitle={topic.title}
                            />
                            <BtnFollow
                                page="topic"
                                userId={userLogged.userId}
                                topic={topic}
                                userData={userData}
                            />
                        </>
                    )}
                </div>
            </figure>
        </>
    );
};

export default TopicHeader;
