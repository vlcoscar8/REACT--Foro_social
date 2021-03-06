import React, { useContext } from "react";
import { logoutUserFunction } from "../../../state/actions/authActions";
import { AuthStateContext } from "../../../state/context/authStateContext";

const LogoutModalSide = ({ handleShowModal }) => {
    const { userLogged, dispatch } = useContext(AuthStateContext);

    // Logout button sending to the context
    const handleLogoutBtn = () => {
        dispatch(logoutUserFunction(dispatch));
        handleShowModal();
    };

    return (
        <div
            className={
                userLogged.loggedIn ? "logout active" : "logout no-active"
            }
        >
            <p>Are you sure you want Logout?</p>
            <button className="logout__btn" onClick={handleLogoutBtn}>
                Logout
            </button>
        </div>
    );
};

export default LogoutModalSide;
