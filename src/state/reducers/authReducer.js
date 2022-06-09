import * as actions from "../actions/authActions";

export const INITIAL_STATE = {
    userId: window.localStorage.getItem("userId"),
    token: window.localStorage.getItem("token"),
    loading: false,
    error: false,
    done: false,
};

export const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.LOGIN_LOADING:
            return { ...state, loading: true };
        case actions.LOGIN_OK:
            return {
                userId: action.payload.userId,
                token: action.payload.token,
                loading: false,
                error: false,
                done: true,
            };
        case actions.LOGIN_NOK:
            return {
                userId: "",
                token: "",
                loading: false,
                error: true,
                done: false,
            };
        default:
            return state;
    }
};
