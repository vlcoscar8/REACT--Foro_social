import { faMessage, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { environment } from "../../../../environment/environment";

const UserTopic = ({ topic }) => {
    const [topicData, setTopicData] = useState();

    useEffect(() => {
        try {
            fetch(`${environment.API_URL}/topic/${topic}`)
                .then((res) => res.json())
                .then((data) => {
                    setTopicData(data[0]);
                });
        } catch (error) {
            console.log(error);
        }
    }, [topic]);

    console.log(topicData);

    return (
        <>
            {topicData !== undefined ? (
                <Link to={`/topic/${topicData.id}`} className="user-topic">
                    <h1 className="user-topic__title">{topicData.title}</h1>
                    <div className="user-topic__info">
                        <div className="user-topic__info--icon">
                            <FontAwesomeIcon
                                icon={faMessage}
                                className="icon"
                            />
                            <p className="counter">
                                {topicData.comments.length}
                            </p>
                        </div>
                        <div className="user-topic__info--icon">
                            <FontAwesomeIcon
                                icon={faUserPlus}
                                className="icon"
                            />
                            <p className="counter">
                                {topicData.followers.length}
                            </p>
                        </div>
                    </div>
                </Link>
            ) : (
                <h1>Loading...</h1>
            )}
        </>
    );
};

export default UserTopic;
