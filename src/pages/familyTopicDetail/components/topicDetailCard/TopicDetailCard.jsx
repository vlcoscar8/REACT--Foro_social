import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import BtnFollow from "../../../../components/shared/button-follow/BtnFollow";
import Loading from "../../../../components/shared/loading/Loading";
import { AuthStateContext } from "../../../../state/context/authStateContext";
import { environment } from "../../../../environment/environment";

const TopicDetailCard = ({ topic }) => {
    const userId = topic.user[0];
    const [userDetail, setUserDetail] = useState();
    const { userLogged } = useContext(AuthStateContext);

    useEffect(() => {
        fetch(`${environment.API_URL}/user/${userId}`)
            .then((res) => res.json())
            .then((data) => setUserDetail(data));
    }, [userId]);

    return (
        <>
            {userDetail ? (
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
                            {userLogged.loggedIn && (
                                <BtnFollow
                                    page="card"
                                    userId={userId}
                                    topic={topic}
                                />
                            )}
                        </div>
                    </figure>
                </Link>
            ) : (
                <Loading />
            )}
        </>
    );
};

export default TopicDetailCard;
