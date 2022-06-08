import React, { useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import ModalAvatar from "./components/modalAvatar/ModalAvatar";
import UserHeader from "./components/userHeader/UserHeader";
import UserTopic from "./components/userTopic/UserTopic";
import useUserDetail from "../../customHooks/useUserDetail";

const UserProfile = () => {
    const { username } = useParams();
    const [topics, setTopics] = useState([]);
    const [showInfo, setShowInfo] = useState(false);
    const [modal, setModal] = useState(false);

    const userController = {
        type: "name",
        payload: username,
    };
    const { userDetail } = useUserDetail(userController);

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
            {userDetail.length !== 0 ? (
                <section className="user-profile">
                    <UserHeader
                        userDetail={userDetail}
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
                        userDetail={userDetail}
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
