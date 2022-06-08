import * as actions from "../actions/userActions";

const INITIAL_STATE = {
    userDetail: [],
    loading: false,
    error: false,
};

export default function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case actions.GET_USER:
            return {
                ...state,
                loading: true,
            };
        case actions.GET_USER_DETAIL_OK:
            return {
                userDetail: action.payload,
                loading: false,
                error: false,
            };
        case actions.GET_USER_NOK:
            return {
                ...state,
                loading: false,
                error: true,
            };

        default:
            return state;
    }
}
