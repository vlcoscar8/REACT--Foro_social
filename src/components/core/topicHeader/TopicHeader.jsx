import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import BtnFollow from "../../shared/button-follow/BtnFollow";
import BtnComment from "../../shared/button-comment/BtnComment";

const TopicHeader = ({ topic, user }) => {
    return (
        <>
            <picture className="topic__header">
                <img
                    src={topic.wallpaper}
                    alt={topic.title + "Wallpaper"}
                    className="topic__header--img"
                />
                <div className="topic__header--user">
                    <img
                        src={user.avatarProfile}
                        alt={user.username + "avatar image"}
                        className="img"
                    />
                    <h3 className="username">{user.username}</h3>
                </div>
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
                    <BtnFollow page="topic" />
                    <BtnComment />
                </div>
            </figure>
        </>
    );
};

export default TopicHeader;
