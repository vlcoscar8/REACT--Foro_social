import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ModalAvatar from "./components/modalAvatar/ModalAvatar";
import UserHeader from "./components/userHeader/UserHeader";
import UserTopic from "./components/userTopic/UserTopic";
import Loading from "../../components/shared/loading/Loading";
import { serviceGetUserDetail } from "../../state/services/user.services";
import ButtonTopic from "../../components/shared/button-topic/ButtonTopic";
import ModalTopic from "./components/modalTopic/ModalTopic";

const UserProfile = () => {
    const { username } = useParams();
    const [topics, setTopics] = useState([]);
    const [showInfo, setShowInfo] = useState(false);
    const [modal, setModal] = useState(false);
    const [modalTopic, setModalTopic] = useState(false);
    const [userDetail, setUserDetail] = useState();
    // window.scrollTo(0, 0);

    // Update the user detail when the modal avatar or modal topic is showed or hide
    useEffect(() => {
        setUserFetched();
    }, [modalTopic, modal]);

    // Update the user detail used in the page by the username form params
    const setUserFetched = async () => {
        const userController = {
            type: "name",
            payload: username,
        };
        const data = await serviceGetUserDetail(userController);
        setUserDetail(data);
    };

    // Toggle functions to show the topics created or the followed topics
    const memoizedTopicsValue = useCallback(topics, [topics]);

    const showTopics = (info) => {
        setTopics(info);
        memoizedTopicsValue === info ? setShowInfo(false) : setShowInfo(true);
    };

    const showModal = (value) => {
        setModal(value);
    };

    const showModalTopic = (value) => {
        setModalTopic(value);
    };

    return (
        <>
            {userDetail ? (
                <section
                    className="user-profile"
                    data-testid="user-profile-section"
                >
                    <UserHeader
                        userDetail={userDetail}
                        username={username}
                        showTopics={showTopics}
                        showModal={showModal}
                    />
                    <div className="user-profile__topics">
                        {showInfo ? (
                            topics.map((topic) => (
                                <UserTopic topic={topic} key={topic} />
                            ))
                        ) : (
                            <ButtonTopic
                                username={username}
                                showModalTopic={showModalTopic}
                            />
                        )}
                    </div>
                    <ModalTopic
                        showModalTopic={showModalTopic}
                        modalTopic={modalTopic}
                    />
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
