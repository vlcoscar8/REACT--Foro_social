import { render } from "@testing-library/react";
import Header from "./Header";
import { AuthStateContext } from "../../../state/context/authStateContext";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

describe("Header with the user logged", () => {
    const userLogged = {
        loggedIn: true,
    };
    const userData = {
        username: "Anapri",
    };
    const contextValue = { userData, userLogged };

    const wrapper = ({ children }) => (
        <AuthStateContext.Provider value={contextValue}>
            <Router>{children}</Router>
        </AuthStateContext.Provider>
    );

    it("text is defined when the user is logged", () => {
        const { queryByTestId } = render(<Header />, {
            wrapper,
        });
        expect(queryByTestId("username-text")).toBeTruthy();
    });

    it("The user name is printed in header when the user is logged", () => {
        const { queryByTestId } = render(<Header />, {
            wrapper,
        });
        const text = queryByTestId("username-text");
        const content = "Hi Anapri 😊";
        expect(text.innerHTML).toBe(content);
    });

    it("Profile button exits when the user is logged", () => {
        const { queryByTestId } = render(<Header />, {
            wrapper,
        });
        const profileBtn = queryByTestId("profile-button");
        expect(profileBtn).toBeTruthy();
    });

    it("Logout button exits when the user is logged", () => {
        const { queryByTestId } = render(<Header />, {
            wrapper,
        });
        const profileBtn = queryByTestId("logout-button");
        expect(profileBtn).toBeTruthy();
    });

    it("Logout button exits when the user is logged", () => {
        const { queryByTestId } = render(<Header />, {
            wrapper,
        });
        const profileBtn = queryByTestId("login-button");
        expect(profileBtn).toBeFalsy();
    });
});

describe("Header with any user logged", () => {
    const userLogged = {
        loggedIn: false,
    };

    const contextValue = { userLogged };

    const wrapper = ({ children }) => (
        <AuthStateContext.Provider value={contextValue}>
            <Router>{children}</Router>
        </AuthStateContext.Provider>
    );

    it("text is NOT defined when any user is logged", () => {
        const { queryByTestId } = render(<Header />, {
            wrapper,
        });
        expect(queryByTestId("username-text")).toBeFalsy();
    });

    it("Profile button NOT exist when any user is logged", () => {
        const { queryByTestId } = render(<Header />, {
            wrapper,
        });
        expect(queryByTestId("profile-button")).toBeFalsy();
    });

    it("Logout button NOT exits when any user is logged", () => {
        const { queryByTestId } = render(<Header />, {
            wrapper,
        });
        expect(queryByTestId("logout-button")).toBeFalsy();
    });

    it("Login button exits when any user is logged", () => {
        const { queryByTestId } = render(<Header />, {
            wrapper,
        });
        expect(queryByTestId("login-button")).toBeTruthy();
    });
});
