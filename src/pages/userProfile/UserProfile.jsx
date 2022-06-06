import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserHeader from "../../components/core/userHeader/UserHeader";
import UserTopic from "../../components/core/userTopic/UserTopic";
import { environment } from "../../environment/environment";

const UserProfile = () => {
    const { username } = useParams();
    const [user, setUser] = useState();
    const [isLoaded, setIsLoaded] = useState(false);
    const [topics, setTopics] = useState([]);
    const [showInfo, setShowInfo] = useState(false);

    useEffect(() => {
        fetch(`${environment.API_URL}/user/name/${username}`)
            .then((res) => res.json())
            .then((data) => {
                setUser(data);
                setIsLoaded(true);
            });
    }, [username]);

    const memoizedValue = useCallback(topics, [topics]);

    const showTopics = (info) => {
        setTopics(info);

        memoizedValue === info ? setShowInfo(false) : setShowInfo(true);
    };

    return (
        <>
            {isLoaded ? (
                <section className="user-profile">
                    <UserHeader user={user} showTopics={showTopics} />
                    {showInfo ? (
                        topics.map((topic) => (
                            <UserTopic topic={topic} key={topic} />
                        ))
                    ) : (
                        <h2>Interesting...</h2>
                    )}
                </section>
            ) : (
                <h1>Is loading</h1>
            )}
        </>
    );
};

export default UserProfile;
