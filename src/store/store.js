import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import familyListReducer from "../reducers/familyListReducer";
import familyDetailReducer from "../reducers/familyDetailReducer";
import userDetailReducer from "../reducers/userDetailReducer";

const rootReducer = combineReducers({
    familyList: familyListReducer,
    familyDetail: familyDetailReducer,
    userDetail: userDetailReducer,
});

export const store = configureStore(
    { reducer: rootReducer },
    composeWithDevTools(applyMiddleware(thunk))
);
