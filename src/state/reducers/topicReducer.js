import * as actions from "../actions/topicActions";

const INITIAL_STATE = {
    topicDetail: [],
    topicUser: [],
    topicComments: [],
    loading: false,
    error: false,
    done: false,
};

export default function topicReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case actions.GET_TOPIC:
            return {
                ...state,
                loading: true,
                error: false,
            };
        case actions.GET_TOPIC_DETAIL:
            return {
                ...state,
                topicDetail: action.payload,
                loading: false,
                error: false,
                done: true,
            };
        case actions.GET_TOPIC_USER:
            return {
                ...state,
                topicUser: action.payload,
                loading: false,
                error: false,
                done: true,
            };
        case actions.GET_TOPIC_COMMENTS:
            return {
                ...state,
                topicComments: action.payload,
                loading: false,
                error: false,
                done: true,
            };
        case actions.GET_TOPIC_NOK:
            return {
                ...state,
                loading: false,
                error: true,
            };
        default:
            return state;
    }
}
