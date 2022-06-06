import React, { createContext, useEffect, useState } from "react";
import { environment } from "../environment/environment";

export const ForoContext = createContext();

export const ForoContextProvider = ({ children }) => {
    const [familyTopics, setFamilyTopics] = useState([]);

    useEffect(() => {
        fetch(`${environment.API_URL}topic/family`)
            .then((res) => res.json())
            .then((data) => setFamilyTopics(data));
    }, []);

    return (
        <ForoContext.Provider value={familyTopics}>
            {children}
        </ForoContext.Provider>
    );
};
