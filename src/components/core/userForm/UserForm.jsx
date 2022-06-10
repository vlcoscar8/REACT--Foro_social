import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { loginUserFunction } from "../../../state/actions/authActions";
import { AuthStateContext } from "../../../state/context/authStateContext";

const INITIAL_STATE = {
    username: "",
    email: "",
    password: "",
};

const UserForm = ({ handleShowModal, showRegisterForm, showRegister }) => {
    const [form, setForm] = useState(INITIAL_STATE);
    const [submit, setSubmit] = useState(false);
    const [showError, setShowError] = useState(false);
    // const { fetchUser, userData } = useContext(ForoContext);
    const { dispatch, userLogged } = useContext(AuthStateContext);

    useEffect(() => {
        if (submit && userLogged.loggedIn) {
            handleShowModal();
            setSubmit(false);
        }

        if (submit && userLogged.error !== "") {
            setShowError(true);
            setSubmit(false);
            setTimeout(() => {
                setShowError(false);
            }, 4000);
        }
    }, [userLogged]);

    // Listen all the changes on the input form
    const handleChangeForm = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    // Submit form function, setting the form to the login fetch function on the context
    const submitUserForm = (e) => {
        e.preventDefault();
        dispatch(loginUserFunction(form, dispatch));
        setForm(INITIAL_STATE);
        setSubmit(true);
        showRegisterForm("false");
    };

    const handleShowRegisterForm = () => {
        showRegisterForm();
    };

    return (
        <form
            onSubmit={submitUserForm}
            className={
                !userLogged.loggedIn
                    ? "login-form active"
                    : "login-form no-active"
            }
        >
            {showRegister ? (
                <label className="login-form__label">
                    <p className="login-form__label--text">Username</p>
                    <input
                        type="text"
                        name="username"
                        value={form.username}
                        onChange={handleChangeForm}
                        placeholder="username"
                        className="login-form__label--input"
                        required
                    />
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        className="login-form__label--icon"
                    />
                </label>
            ) : (
                ""
            )}
            <label className="login-form__label">
                <p className="login-form__label--text">Email Adress</p>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChangeForm}
                    placeholder="example@email.com"
                    className="login-form__label--input"
                    required
                />
                <FontAwesomeIcon
                    icon={faEnvelope}
                    className="login-form__label--icon"
                />
            </label>
            <label className="login-form__label">
                <p className="login-form__label--text">Password</p>
                <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChangeForm}
                    placeholder="*********"
                    className="login-form__label--input"
                    required
                />
                <FontAwesomeIcon
                    icon={faLock}
                    className="login-form__label--icon"
                />
            </label>
            <button type="submit" className="login-form__btn">
                {!showRegister ? "Log in" : "Sign up"}
            </button>
            {!showRegister && (
                <p
                    className="login-form__question"
                    onClick={handleShowRegisterForm}
                >
                    Not registered yet?
                </p>
            )}
            {showError && (
                <p className="login-form__error">{userLogged.error} </p>
            )}
        </form>
    );
};

export default UserForm;
