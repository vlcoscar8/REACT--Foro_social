import React, { createContext, useEffect, useState } from "react";

const API_URL = "https://foro-api-oscar.herokuapp.com/";

export const ForoContext = createContext();

export const ForoContextProvider = ({ children }) => {
    const [familyTopics, setFamilyTopics] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}topic/family`)
            .then((res) => res.json())
            .then((data) => setFamilyTopics(data));
    }, []);

    return (
        <ForoContext.Provider value={familyTopics}>
            {children}
        </ForoContext.Provider>
    );
};
