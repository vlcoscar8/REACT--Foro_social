import { faArrowLeftLong, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import LogoutModalSide from "../logoutModalSide/LogoutModalSide";
import UserForm from "../userForm/UserForm";

const ModalLogin = ({ modalActive, showModal }) => {
    const [showRegister, setShowRegister] = useState(false);
    // Hide the modal function
    const handleShowModal = () => {
        showModal();
        setShowRegister(false);
    };

    const showRegisterForm = (value) => {
        if (value) {
            setShowRegister(false);
            return;
        }
        setShowRegister(!showRegister);
    };

    return (
        <>
            <section
                className={modalActive ? "modal-user" : "modal-user no-active"}
            >
                {showRegister ? (
                    <button onClick={showRegisterForm} className="btn__back">
                        <FontAwesomeIcon
                            icon={faArrowLeftLong}
                            className="icon"
                        />
                    </button>
                ) : (
                    ""
                )}
                <button onClick={handleShowModal} className="btn__close">
                    <FontAwesomeIcon icon={faXmark} className="icon" />
                </button>
                <UserForm
                    showRegisterForm={showRegisterForm}
                    handleShowModal={handleShowModal}
                    showRegister={showRegister}
                />
                <LogoutModalSide
                    handleShowModal={handleShowModal}
                    showRegister={showRegister}
                />
            </section>
            <div
                className={
                    modalActive
                        ? "modal-user__overlay"
                        : "modal-user__overlay no-active"
                }
            ></div>
        </>
    );
};

export default ModalLogin;
