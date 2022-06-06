import { faGem } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const UserHeader = ({ user }) => {
    return (
        <figure className="user-header">
            <img
                src="https://wallpaper.dog/large/20534031.jpg"
                alt="background"
                className="user-header__background"
            />
            <div className="user-header__user">
                <button className="user-header__user--edit">Edit</button>
                <div className="user-header__user--avatar">
                    <img
                        src={user.avatarProfile}
                        alt="user avatar"
                        className="img"
                    />
                    <h2 className="username">{user.username}</h2>
                </div>
                <div className="user-header__user--coins">
                    <FontAwesomeIcon icon={faGem} className="icon" />
                    <p>{user.coins}</p>
                </div>
            </div>
            <figure className="user-header__nav">
                <div className="user-header__nav--icon">
                    <p>Topics created</p>
                    <p className="counter">{user.topics.length}</p>
                </div>
                <div className="user-header__nav--icon">
                    <p>Topics followed</p>
                    <p className="counter">{user.topicsFollowing.length}</p>
                </div>
            </figure>
        </figure>
    );
};

export default UserHeader;
