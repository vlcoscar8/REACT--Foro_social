import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoenixSquadron } from "@fortawesome/free-brands-svg-icons";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ModalLogin from "../modalLogin/ModalLogin";
import { AuthStateContext } from "../../../state/context/authStateContext";

const Header = () => {
    const [modalActive, setModalActive] = useState(false);
    const { userLogged, userData } = useContext(AuthStateContext);

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
                {userLogged.loggedIn ? (
                    <p>Hi {userLogged.userId}</p>
                ) : (
                    <p>Welcome!</p>
                )}
                <div className="header__nav--buttons">
                    {userLogged.loggedIn && (
                        <Link to={`/user/${userData.username}`}>
                            <button className="btn login">View Profile</button>
                        </Link>
                    )}
                    <button
                        onClick={showModal}
                        className={`btn ${
                            userLogged.loggedIn ? "logout" : "login"
                        }`}
                    >
                        {!userLogged.loggedIn ? "Login" : "Logout"}
                    </button>
                </div>
            </nav>
            <ModalLogin modalActive={modalActive} showModal={showModal} />
        </header>
    );
};

export default Header;
