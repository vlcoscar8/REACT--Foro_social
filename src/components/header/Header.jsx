import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoenixSquadron } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <nav className="header__nav">
                <FontAwesomeIcon
                    icon={faPhoenixSquadron}
                    className="header__nav--icon"
                />
                <div className="header__nav--buttons">
                    <Link to="/">
                        <button>Home</button>
                    </Link>
                    <Link to="/User">
                        <button>User</button>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
