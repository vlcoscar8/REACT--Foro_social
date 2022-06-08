import * as actions from "../actions/familyActions";

const initialState = {
    familyTopics: [],
    error: false,
    loading: false,
};

export default function familyReducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_FAMILY:
            return { ...state, loading: true };
        case actions.GET_FAMILY_OK:
            return {
                familyTopics: action.payload,
                loading: false,
                error: false,
            };
        case actions.GET_FAMILY_ERROR:
            return { ...state, loading: false, error: true };
        default:
            return state;
    }
}
