import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import LoginForm from "../loginForm/LoginForm";
import LogoutModalSide from "../logoutModal/LogoutModalSide";
import RegisterForm from "../registerForm/RegisterForm";

const ModalLogin = ({ modalActive, showModal }) => {
    const [showRegister, setShowRegister] = useState(false);

    // Hide the modal function
    const handleShowModal = () => {
        showModal();
    };

    const showRegisterForm = () => {
        setShowRegister(true);
    };

    return (
        <>
            <section
                className={modalActive ? "modal-user" : "modal-user no-active"}
            >
                <button onClick={handleShowModal} className="btn__close">
                    <FontAwesomeIcon icon={faXmark} className="icon" />
                </button>
                {!showRegister ? (
                    <LoginForm
                        showRegisterForm={showRegisterForm}
                        handleShowModal={handleShowModal}
                    />
                ) : (
                    <RegisterForm />
                )}
                <LogoutModalSide handleShowModal={handleShowModal} />
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
