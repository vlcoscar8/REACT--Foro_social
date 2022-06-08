import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import BtnFollow from "../../../../components/shared/button-follow/BtnFollow";
import useUserDetail from "../../../../customHooks/useUserDetail";
import Loading from "../../../../components/shared/loading/Loading";

const TopicDetailCard = ({ topic }) => {
    const userId = topic.user[0];
    const { userDetail, loading, error } = useUserDetail(userId);

    return (
        <>
            {!loading && userDetail ? (
                <Link to={`/topic/${topic.id}`} className="topic-card">
                    <figure className="topic-card__header">
                        <div className="topic-card__header--user">
                            <img
                                src={userDetail.avatarProfile}
                                alt={userDetail.username + "avatar"}
                                className="img"
                            />
                            <h3 className="user">{userDetail.username}</h3>
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
                <Loading />
            )}
            {error && <h1>Error</h1>}
        </>
    );
};

export default TopicDetailCard;
