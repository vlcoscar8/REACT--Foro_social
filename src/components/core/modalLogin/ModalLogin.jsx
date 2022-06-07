import { faEnvelope, faLock, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { ForoContext } from "../../../context/apiContext";

const INITIAL_STATE = {
    email: "",
    password: "",
};

const ModalLogin = ({ modalActive, showModal }) => {
    const [form, setForm] = useState(INITIAL_STATE);
    const [submit, setSubmit] = useState(false);
    const [showError, setShowError] = useState(false);

    const { loginUser, userData, logout } = useContext(ForoContext);

    useEffect(() => {
        if (submit && userData.userId !== null) {
            handleShowModal();
            setSubmit(false);
        }

        if (submit && userData.userId === null) {
            setShowError(true);
            setSubmit(false);
            setTimeout(() => {
                setShowError(false);
            }, 4000);
        }
    }, [userData]);

    // Listen all the changes on the input form
    const handleChangeForm = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    // Submit form function, setting the form to the login fetch function on the context
    const submitForm = (e) => {
        e.preventDefault();
        loginUser(form);
        setForm(INITIAL_STATE);
        setSubmit(true);
    };

    // Logout button sending to the context
    const handleLogoutBtn = () => {
        logout();
        handleShowModal();
    };

    // Hide the modal function
    const handleShowModal = () => {
        showModal();
    };

    return (
        <>
            <section
                className={
                    modalActive ? "modal-login" : "modal-login no-active"
                }
            >
                <button onClick={handleShowModal} className="btn__close">
                    <FontAwesomeIcon icon={faXmark} className="icon" />
                </button>
                <form
                    onSubmit={submitForm}
                    className={
                        userData.userId === null
                            ? "form active"
                            : "form no-active"
                    }
                >
                    <label>
                        <p>Email Adress</p>
                        <input
                            type="text"
                            name="email"
                            value={form.email}
                            onChange={handleChangeForm}
                            placeholder="example@email.com"
                        />
                        <FontAwesomeIcon icon={faEnvelope} className="icon" />
                    </label>
                    <label>
                        <p>Password</p>
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChangeForm}
                            placeholder="*********"
                        />
                        <FontAwesomeIcon icon={faLock} className="icon" />
                    </label>

                    <button type="submit" className="btn-login">
                        Log in
                    </button>
                    {showError ? (
                        <p className="error">
                            The Email or password is incorrect
                        </p>
                    ) : (
                        ""
                    )}
                </form>
                <div
                    className={
                        userData.userId !== null
                            ? "logout active"
                            : "logout no-active"
                    }
                >
                    <p>Are you sure you want logOut?</p>
                    <button onClick={handleLogoutBtn}>Logout</button>
                </div>
            </section>
            <div
                className={
                    modalActive
                        ? "modal-login__overlay"
                        : "modal-login__overlay no-active"
                }
            ></div>
        </>
    );
};

export default ModalLogin;
