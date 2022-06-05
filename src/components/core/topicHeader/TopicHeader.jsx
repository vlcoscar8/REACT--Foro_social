import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import BtnFollow from "../../components/shared/button-follow/BtnFollow";

const TopicHeader = ({ topic, user }) => {
    return (
        <picture>
            <img src={topic.wallpaper} alt={topic.title + "Wallpaper"} />
            <div>
                <img
                    src={user.avatarProfile}
                    alt={user.username + "avatar image"}
                />
                <h3>{user.username}</h3>
            </div>
            <h1>{topic.title}</h1>
            <div>
                <div className="messages">
                    <FontAwesomeIcon icon={faMessage} className="icon" />
                    <p className="counter">{topic.comments.length}</p>
                </div>
                <div className="followers">
                    <FontAwesomeIcon icon={faUserPlus} className="icon" />
                    <p className="counter">{topic.followers.length}</p>
                </div>
                <BtnFollow />
            </div>
        </picture>
    );
};

export default TopicHeader;
