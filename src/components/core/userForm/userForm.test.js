import { AuthStateContext } from "../../../state/context/authStateContext";
import UserForm from "./UserForm";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import { useContext } from "react";

describe("Show login form", () => {
    const showRegister = false;

    const userLogged = {
        loggedIn: false,
    };

    const contextValue = { userLogged };

    const wrapper = ({ children }) => (
        <AuthStateContext.Provider value={contextValue}>
            {children}
        </AuthStateContext.Provider>
    );

    it("form is active if any user is logged", () => {
        const { container } = render(<UserForm showRegister={showRegister} />, {
            wrapper,
        });

        expect(
            container.getElementsByClassName("login-form active").length
        ).toBe(1);
    });

    it("Button login exist", () => {
        const { getByText } = render(<UserForm showRegister={showRegister} />, {
            wrapper,
        });

        expect(getByText("Log in")).toBeInTheDocument();
    });

    it("not registered yet commentary exist", () => {
        const { getByText } = render(<UserForm showRegister={showRegister} />, {
            wrapper,
        });
        expect(getByText("Not registered yet?")).toBeInTheDocument();
    });
});

describe("Show register form", () => {
    const showRegister = true;

    const userLogged = {
        loggedIn: false,
    };

    const contextValue = { userLogged };

    const wrapper = ({ children }) => (
        <AuthStateContext.Provider value={contextValue}>
            {children}
        </AuthStateContext.Provider>
    );

    it("form is active if any user is logged", () => {
        const { container } = render(<UserForm showRegister={showRegister} />, {
            wrapper,
        });

        expect(
            container.getElementsByClassName("login-form active").length
        ).toBe(1);
    });

    it("Button sign up exist", () => {
        const { getByText } = render(<UserForm showRegister={showRegister} />, {
            wrapper,
        });

        expect(getByText("Sign up")).toBeInTheDocument();
    });

    it("not registered yet commentary NOT exist", () => {
        const { container } = render(<UserForm showRegister={showRegister} />, {
            wrapper,
        });

        expect(
            container.getElementsByClassName("login-form__question").length
        ).toBe(0);
    });

    it("Label username exist", () => {
        const { queryByTestId } = render(
            <UserForm showRegister={showRegister} />,
            {
                wrapper,
            }
        );

        expect(queryByTestId("username-label")).toBeTruthy();
    });
});
