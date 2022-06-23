import "@testing-library/jest-dom/extend-expect";
import Home from "./Home";
import { Provider } from "react-redux";
import { fireEvent, render, screen } from "@testing-library/react";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("home", () => {
    const INITIAL_STATE = {
        family: {
            familyList: [
                {
                    title: "example1",
                    topics: [1, 2],
                    id: 1,
                },
                {
                    title: "example2",
                    topics: [1, 2, 3, 4],
                    id: 2,
                },
            ],
            familyDetail: [],
            error: false,
            loading: false,
            done: true,
        },
    };

    const store = mockStore(INITIAL_STATE);

    it("Home section exist", () => {
        const { container } = render(
            <Provider store={store}>
                <Router>
                    <Home />
                </Router>
            </Provider>
        );
        expect(container.getElementsByClassName("home").length).toBe(1);
    });

    it("sort button exist", () => {
        const { queryByTestId } = render(
            <Provider store={store}>
                <Router>
                    <Home />
                </Router>
            </Provider>
        );
        const button = queryByTestId("sort-button");
        expect(button.innerHTML).toBe("Sort");
    });

    it("sort button event works", () => {
        render(
            <Provider store={store}>
                <Router>
                    <Home />
                </Router>
            </Provider>
        );

        // Get the initial family list values in the mock state
        const initialFamilyList = screen.queryAllByTestId("family-name");

        fireEvent.click(screen.queryByTestId("sort-button"));

        // Get the family list sorted by the event click
        const filteredFamilyList = screen.queryAllByTestId("family-name");

        // Get the first element of the state and compare with the last element of the filtered list, the function should sort the list by topics length
        expect(initialFamilyList[0]).toStrictEqual(filteredFamilyList[1]);
    });
});
