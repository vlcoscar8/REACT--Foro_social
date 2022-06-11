import React, { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ModalAvatar from "./components/modalAvatar/ModalAvatar";
import UserHeader from "./components/userHeader/UserHeader";
import UserTopic from "./components/userTopic/UserTopic";
import Loading from "../../components/shared/loading/Loading";
import { serviceGetUserDetail } from "../../state/services/user.services";
import ButtonTopic from "../../components/shared/button-topic/ButtonTopic";

const UserProfile = () => {
    const { username } = useParams();
    const [topics, setTopics] = useState([]);
    const [showInfo, setShowInfo] = useState(false);
    const [modal, setModal] = useState(false);
    const [userDetail, setUserDetail] = useState();
    window.scrollTo(0, 0);

    const userController = {
        type: "name",
        payload: username,
    };

    const setUserFetched = async () => {
        const data = await serviceGetUserDetail(userController);
        setUserDetail(data);
    };

    useEffect(() => {
        setUserFetched();
    }, []);

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
            {userDetail ? (
                <section className="user-profile">
                    <UserHeader
                        userDetail={userDetail}
                        username={username}
                        showTopics={showTopics}
                        showModal={showModal}
                    />
                    {showInfo ? (
                        topics.map((topic) => (
                            <UserTopic topic={topic} key={topic} />
                        ))
                    ) : (
                        <ButtonTopic username={username} />
                    )}
                    <ModalAvatar
                        userDetail={userDetail}
                        showModal={showModal}
                        modal={modal}
                    />
                </section>
            ) : (
                <Loading />
            )}
        </>
    );
};

export default UserProfile;
