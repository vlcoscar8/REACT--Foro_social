import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ModalAvatar from "./components/modalAvatar/ModalAvatar";
import UserHeader from "./components/userHeader/UserHeader";
import UserTopic from "./components/userTopic/UserTopic";
import { environment } from "../../environment/environment";

const UserProfile = () => {
    const { username } = useParams();
    const [user, setUser] = useState();
    const [topics, setTopics] = useState([]);
    const [showInfo, setShowInfo] = useState(false);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        fetch(`${environment.API_URL}/user/name/${username}`)
            .then((res) => res.json())
            .then((data) => {
                setUser(data);
            });
    }, [username]);

    const memoizedTopicsValue = useCallback(topics, [topics]);

    const showTopics = (info) => {
        setTopics(info);

        memoizedTopicsValue === info ? setShowInfo(false) : setShowInfo(true);
    };

    const showModal = (value) => {
        setModal(value);
    };

    return (
        <>
            {user !== undefined ? (
                <section className="user-profile">
                    <UserHeader
                        user={user}
                        showTopics={showTopics}
                        showModal={showModal}
                    />
                    {showInfo ? (
                        topics.map((topic) => (
                            <UserTopic topic={topic} key={topic} />
                        ))
                    ) : (
                        <h2>Interesting...</h2>
                    )}
                    <ModalAvatar
                        user={user}
                        showModal={showModal}
                        modal={modal}
                    />
                </section>
            ) : (
                <h1>Is loading</h1>
            )}
        </>
    );
};

export default UserProfile;
