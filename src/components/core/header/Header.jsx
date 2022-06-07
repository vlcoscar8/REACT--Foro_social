import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoenixSquadron } from "@fortawesome/free-brands-svg-icons";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ModalLogin from "../modalLogin/ModalLogin";
import { ForoContext } from "../../../context/apiContext";

const Header = () => {
    const [modalActive, setModalActive] = useState(false);
    const { userData } = useContext(ForoContext);

    const showModal = () => {
        setModalActive(!modalActive);
    };

    return (
        <header className="header">
            <nav className="header__nav">
                <Link to="/">
                    <FontAwesomeIcon
                        icon={faPhoenixSquadron}
                        className="header__nav--icon"
                    />
                </Link>
                {userData.userId !== null ? (
                    <p>{userData.userId}</p>
                ) : (
                    <p>Hola</p>
                )}
                <div className="header__nav--buttons">
                    <button onClick={showModal}>
                        {userData.userId !== null ? "Logout" : "Login"}
                    </button>
                </div>
            </nav>
            <ModalLogin modalActive={modalActive} showModal={showModal} />
        </header>
    );
};

export default Header;
