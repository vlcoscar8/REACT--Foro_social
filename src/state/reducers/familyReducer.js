import * as actions from "../actions/familyActions";

const INITIAL_STATE = {
    familyList: [],
    familyDetail: [],
    error: false,
    loading: false,
    done: false,
};

export default function familyReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case actions.GET_FAMILY:
            return {
                familyList: [],
                familyDetail: [],
                loading: true,
                error: false,
                done: false,
            };
        case actions.GET_FAMILY_LIST_OK:
            return {
                ...state,
                familyList: action.payload,
                loading: false,
                error: false,
                done: true,
            };
        case actions.GET_FAMILY_DETAIL_OK:
            return {
                ...state,
                familyDetail: action.payload,
                loading: false,
                error: false,
                done: true,
            };
        case actions.GET_FAMILY_ERROR:
            return { ...state, loading: false, error: true, done: false };
        default:
            return state;
    }
}
