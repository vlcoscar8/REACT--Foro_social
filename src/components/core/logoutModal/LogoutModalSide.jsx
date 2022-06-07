import React, { useContext } from "react";
import { ForoContext } from "../../../context/apiContext";

const LogoutModalSide = ({ handleShowModal }) => {
    const { logout, userData } = useContext(ForoContext);
    // Logout button sending to the context
    const handleLogoutBtn = () => {
        logout();
        handleShowModal();
    };
    return (
        <div
            className={
                userData.userId !== null ? "logout active" : "logout no-active"
            }
        >
            <p>Are you sure you want logOut?</p>
            <button onClick={handleLogoutBtn}>Logout</button>
        </div>
    );
};

export default LogoutModalSide;
