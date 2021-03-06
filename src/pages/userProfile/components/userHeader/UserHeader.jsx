import { faGem } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { AuthStateContext } from "../../../../state/context/authStateContext";

const UserHeader = ({ userDetail, username, showTopics, showModal }) => {
    const [whoClicked, setWhoClicked] = useState("");
    const [visibility, setVisibility] = useState(false);
    const [user, setUser] = useState();
    const { userLogged, userData } = useContext(AuthStateContext);

    // Set visibility of the user settings depending on the user logged
    useEffect(() => {
        setUser(username);
    }, [username]);

    useEffect(() => {
        if (userLogged.loggedIn && user === userData.username) {
            setVisibility(true);
        } else {
            setVisibility(false);
        }
    }, [userLogged, user, userData]);

    // Toggle buttons to see the topics and the followed topics
    const memoizedValue = useCallback(whoClicked, [whoClicked]);
    const clickOnTopics = () => {
        showTopics(userDetail.topics);
        memoizedValue === "topic" ? setWhoClicked("") : setWhoClicked("topic");
    };
    const clickOnFollow = () => {
        showTopics(userDetail.topicsFollowing);
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
                {visibility && (
                    <button
                        className="user-header__user--edit"
                        onClick={handleShowModal}
                    >
                        Edit
                    </button>
                )}
                <div className="user-header__user--avatar">
                    <img
                        src={userDetail.avatarProfile}
                        alt="user avatar"
                        className="img"
                    />
                    <h2 className="username">{username}</h2>
                </div>
                {visibility && (
                    <div className="user-header__user--coins">
                        <FontAwesomeIcon icon={faGem} className="icon" />
                        <p>{userDetail.coins}</p>
                    </div>
                )}
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
                    <p className="counter">{userDetail.topics.length}</p>
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
                    <p className="counter">
                        {userDetail.topicsFollowing.length}
                    </p>
                </div>
            </figure>
        </figure>
    );
};

export default UserHeader;
