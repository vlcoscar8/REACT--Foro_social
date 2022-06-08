import { faGem, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import AvatarList from "../avatarList/AvatarList";

const ModalAvatar = ({ userDetail, showModal, modal }) => {
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
                        src={userDetail.avatarProfile}
                        alt="avatar"
                        className="img"
                    />
                    <div className="coins">
                        <FontAwesomeIcon icon={faGem} className="icon" />
                        <p>{userDetail.coins}</p>
                    </div>
                </div>
                <AvatarList userDetail={userDetail} />
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
