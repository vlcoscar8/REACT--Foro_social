import React, { createContext, useState } from "react";
import { environment } from "../environment/environment";

export const ForoContext = createContext();

const INITIAL_STATE = {
    userId: localStorage.getItem("userId"),
    token: localStorage.getItem("token"),
};

export const ForoContextProvider = ({ children }) => {
    const [userData, setUserData] = useState(INITIAL_STATE);

    const fetchUser = (body) => {
        try {
            fetch(
                `${environment.API_URL}/user/${
                    body.username ? "register" : "login"
                }`,
                {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(body),
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    if (data === "The email or password is incorrect") {
                        setUserData({
                            userId: null,
                            token: null,
                        });
                        return;
                    }

                    if (!body.username) {
                        setUserData(setToLocalStorage(data));
                    }
                });
        } catch (error) {
            console.log(error);
        }
    };

    const logout = () => {
        try {
            fetch(`${environment.API_URL}/user/logout`, {
                method: "POST",
            })
                .then((res) => res.json())
                .then((data) => {
                    setUserData({
                        userId: null,
                        token: null,
                    });
                    localStorage.clear();
                });
        } catch (error) {
            console.log(error);
        }
    };

    const setToLocalStorage = (data) => {
        localStorage.setItem("userId", JSON.stringify(data.userId));
        localStorage.setItem("token", JSON.stringify(data.token));

        const userObj = {
            userId: localStorage.getItem("userId"),
            token: localStorage.getItem("token"),
        };

        return userObj;
    };

    return (
        <ForoContext.Provider value={{ fetchUser, logout, userData }}>
            {children}
        </ForoContext.Provider>
    );
};
