import { faGem, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import AvatarList from "../avatarList/AvatarList";

import { AuthStateContext } from "../../../../state/context/authStateContext";

const ModalAvatar = ({ showModal, modal }) => {
    const { userData, userLogged } = useContext(AuthStateContext);

    const handleShowModal = () => {
        showModal(false);
    };

    return (
        <>
            <section
                className={modal ? "modal-avatar" : "modal-avatar no-active"}
            >
                <button onClick={handleShowModal} className="btn__close">
                    <FontAwesomeIcon icon={faXmark} className="icon" />
                </button>
                <div className="modal-avatar__image">
                    <img
                        src={userData.avatarProfile}
                        alt="avatar"
                        className="img"
                    />
                    <div className="coins">
                        <FontAwesomeIcon icon={faGem} className="icon" />
                        <p>{userData.coins}</p>
                    </div>
                </div>
                <AvatarList userData={userData} userId={userLogged.userId} />
            </section>
            <div
                className={
                    modal
                        ? "modal-avatar__overlay"
                        : "modal-avatar__overlay no-active"
                }
            ></div>
        </>
    );
};

export default ModalAvatar;
