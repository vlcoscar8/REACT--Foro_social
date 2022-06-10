import React, { useContext } from "react";
import { logoutUserFunction } from "../../../state/actions/authActions";
import { AuthStateContext } from "../../../state/context/authStateContext";

const LogoutModalSide = ({ handleShowModal }) => {
    const { user, dispatch } = useContext(AuthStateContext);

    // Logout button sending to the context
    const handleLogoutBtn = () => {
        dispatch(logoutUserFunction(dispatch));
        handleShowModal();
    };

    return (
        <div className={user.loggedIn ? "logout active" : "logout no-active"}>
            <p>Are you sure you want logOut?</p>
            <button onClick={handleLogoutBtn}>Logout</button>
        </div>
    );
};

export default LogoutModalSide;
