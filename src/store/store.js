import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import familyReducer from "../reducers/familyReducer";

const rootReducer = combineReducers({
    family: familyReducer,
});

export const store = configureStore(
    { reducer: rootReducer },
    composeWithDevTools(applyMiddleware(thunk))
);
