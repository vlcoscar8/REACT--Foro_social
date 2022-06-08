import * as actions from "../actions/familyActions";

const INITIAL_STATE = {
    familyList: [],
    familyDetail: [],
    error: false,
    loading: false,
};

export default function familyReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case actions.GET_FAMILY:
            return { ...state, loading: true, error: false };
        case actions.GET_FAMILY_LIST_OK:
            return {
                ...state,
                familyList: action.payload,
                loading: false,
                error: false,
            };
        case actions.GET_FAMILY_DETAIL_OK:
            return {
                ...state,
                familyDetail: action.payload,
                loading: false,
                error: false,
            };
        case actions.GET_FAMILY_ERROR:
            return { ...state, loading: false, error: true };
        default:
            return state;
    }
}
