import React, { useEffect, useReducer } from "react";
import { authReducer } from "../reducers/authReducer";
import { INITIAL_STATE } from "../reducers/authReducer";

// Create context
export const AuthStateContext = React.createContext();

// Context
export const AuthProvider = ({ children }) => {
    const [user, dispatch] = useReducer(authReducer, INITIAL_STATE);

    useEffect(() => {
        console.log(user, 1);
    }, [user]);

    return (
        <AuthStateContext.Provider value={{ user, dispatch }}>
            {children}
        </AuthStateContext.Provider>
    );
};
