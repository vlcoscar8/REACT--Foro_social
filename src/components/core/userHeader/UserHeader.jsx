import { faGem } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useState } from "react";

const UserHeader = ({ user, showTopics, showModal }) => {
    const [whoClicked, setWhoClicked] = useState("");

    const memoizedValue = useCallback(whoClicked, [whoClicked]);

    const clickOnTopics = () => {
        showTopics(user.topics);

        memoizedValue === "topic" ? setWhoClicked("") : setWhoClicked("topic");
    };

    const clickOnFollow = () => {
        showTopics(user.topicsFollowing);
        memoizedValue === "follow"
            ? setWhoClicked("")
            : setWhoClicked("follow");
    };

    const handleShowModal = () => {
        showModal(true);
    };
    return (
        <figure className="user-header">
            <img
                src="https://wallpaper.dog/large/20534031.jpg"
                alt="background"
                className="user-header__background"
            />
            <div className="user-header__user">
                <button
                    className="user-header__user--edit"
                    onClick={handleShowModal}
                >
                    Edit
                </button>
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
                <div
                    className={
                        whoClicked === "topic"
                            ? "user-header__nav--icon  active"
                            : "user-header__nav--icon"
                    }
                    onClick={clickOnTopics}
                >
                    <p>Topics created</p>
                    <p className="counter">{user.topics.length}</p>
                </div>
                <div
                    className={
                        whoClicked === "follow"
                            ? "user-header__nav--icon  active"
                            : "user-header__nav--icon"
                    }
                    onClick={clickOnFollow}
                >
                    <p>Topics followed</p>
                    <p className="counter">{user.topicsFollowing.length}</p>
                </div>
            </figure>
        </figure>
    );
};

export default UserHeader;
