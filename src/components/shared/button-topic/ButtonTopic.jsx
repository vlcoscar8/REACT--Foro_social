import React, { useContext, useEffect, useState } from "react";
import { AuthStateContext } from "../../../state/context/authStateContext";

const ButtonTopic = ({ username, showModalTopic }) => {
    const [userName, setUserName] = useState();
    const { userData, userLogged } = useContext(AuthStateContext);

    useEffect(() => {
        setUserName(username);
    }, [username, userLogged]);

    const handleClickButton = () => {
        showModalTopic(true);
    };

    return (
        <>
            {userLogged.loggedIn && userData.username === userName && (
                <button
                    className="user-profile__topics--btn"
                    onClick={handleClickButton}
                >
                    CreateTopic
                </button>
            )}
        </>
    );
};

export default ButtonTopic;
