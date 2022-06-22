import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoenixSquadron } from "@fortawesome/free-brands-svg-icons";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ModalLogin from "../modalLogin/ModalLogin";
import { AuthStateContext } from "../../../state/context/authStateContext";
import {
    faRightFromBracket,
    faRightToBracket,
    faUser,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const [modalActive, setModalActive] = useState(false);
    const { userLogged, userData } = useContext(AuthStateContext);
    const [widthWindow, setWidthWindow] = useState(window.innerWidth);

    let resizeWindow = () => {
        setWidthWindow(window.innerWidth);
    };

    useEffect(() => {
        resizeWindow();
        window.addEventListener("resize", resizeWindow);
        return () => window.removeEventListener("resize", resizeWindow);
    }, []);

    const showModal = () => {
        setModalActive(!modalActive);
    };

    return (
        <header className="header">
            <nav className="header__nav">
                <Link to="/home">
                    <FontAwesomeIcon
                        icon={faPhoenixSquadron}
                        className="header__nav--icon"
                    />
                </Link>
                {userLogged.loggedIn && (
                    <p data-testid="username-text">Hi {userData.username} 😊</p>
                )}
                <div className="header__nav--buttons">
                    {userLogged.loggedIn && (
                        <Link to={`/user/${userData.username}`}>
                            <button
                                className="btn login"
                                data-testid="profile-button"
                            >
                                {widthWindow > 730 ? (
                                    "View Profile"
                                ) : (
                                    <FontAwesomeIcon
                                        icon={faUser}
                                        className="icon"
                                    />
                                )}
                            </button>
                        </Link>
                    )}
                    {!userLogged.loggedIn ? (
                        <button
                            onClick={showModal}
                            className="btn login"
                            data-testid="login-button"
                        >
                            {widthWindow > 730 ? (
                                "Login"
                            ) : (
                                <FontAwesomeIcon
                                    icon={faRightToBracket}
                                    className="icon"
                                />
                            )}
                        </button>
                    ) : (
                        <button
                            onClick={showModal}
                            className="btn logout"
                            data-testid="logout-button"
                        >
                            {widthWindow > 730 ? (
                                "Logout"
                            ) : (
                                <FontAwesomeIcon
                                    icon={faRightFromBracket}
                                    className="icon"
                                />
                            )}
                        </button>
                    )}
                </div>
            </nav>
            <ModalLogin modalActive={modalActive} showModal={showModal} />
        </header>
    );
};

export default Header;
