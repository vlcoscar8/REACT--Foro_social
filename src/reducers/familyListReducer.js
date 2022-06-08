import * as actions from "../actions/familyListActions";

const initialState = {
    familyList: [],
    error: false,
    loading: false,
};

export default function familyListReducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_FAMILY_LIST:
            return { ...state, loading: true };
        case actions.GET_FAMILY_LIST_OK:
            return {
                familyList: action.payload,
                loading: false,
                error: false,
            };
        case actions.GET_FAMILY_LIST_ERROR:
            return { ...state, loading: false, error: true };
        default:
            return state;
    }
}
