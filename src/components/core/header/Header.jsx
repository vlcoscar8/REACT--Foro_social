import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoenixSquadron } from "@fortawesome/free-brands-svg-icons";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ModalLogin from "../modalLogin/ModalLogin";
import { AuthStateContext } from "../../../state/context/authStateContext";

const Header = () => {
    const [modalActive, setModalActive] = useState(false);
    const { user } = useContext(AuthStateContext);

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
                {user.loggedIn ? <p>Hi {user.userId}</p> : <p>Welcome!</p>}
                <div className="header__nav--buttons">
                    <button onClick={showModal}>
                        {!user.loggedIn ? "Login" : "Logout"}
                    </button>
                </div>
            </nav>
            <ModalLogin modalActive={modalActive} showModal={showModal} />
        </header>
    );
};

export default Header;
