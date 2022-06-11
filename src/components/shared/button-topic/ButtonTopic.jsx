import React, { useContext, useEffect, useState } from "react";
import { AuthStateContext } from "../../../state/context/authStateContext";

const ButtonTopic = ({ username }) => {
    const [userName, setUserName] = useState();
    const { userData, userLogged } = useContext(AuthStateContext);

    useEffect(() => {
        setUserName(username);
    }, [username, userLogged]);

    return (
        <>
            {userLogged.loggedIn && userData.username === userName && (
                <button>CreateTopic</button>
            )}
        </>
    );
};

export default ButtonTopic;
