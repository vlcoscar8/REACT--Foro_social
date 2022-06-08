import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import familyListReducer from "../reducers/familyListReducer";
import familyDetailReducer from "../reducers/familyDetailReducer";

const rootReducer = combineReducers({
    familyList: familyListReducer,
    familyDetail: familyDetailReducer,
});

export const store = configureStore(
    { reducer: rootReducer },
    composeWithDevTools(applyMiddleware(thunk))
);
