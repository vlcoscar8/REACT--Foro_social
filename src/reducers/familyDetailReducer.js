import * as actions from "../actions/familyDetailActions";

const INITIAL_STATE = {
    family: {},
    loading: false,
    error: false,
};

export default function familyDetailReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case actions.GET_FAMILY_DETAIL:
            return {
                ...state,
                loading: true,
            };
        case actions.GET_FAMILY_DETAIL_OK:
            return {
                family: action.payload,
                loading: true,
                error: false,
            };
        case actions.GET_FAMILY_DETAIL_NOK:
            return {
                ...state,
                loading: false,
                error: true,
            };

        default:
            return state;
    }
}
