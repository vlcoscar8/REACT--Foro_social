import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import familyReducer from "../reducers/familyReducer";
import userReducer from "../reducers/userReducer";

const rootReducer = combineReducers({
    family: familyReducer,
    user: userReducer,
});

export const store = configureStore(
    { reducer: rootReducer },
    composeWithDevTools(applyMiddleware(thunk))
);
