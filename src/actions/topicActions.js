import { serviceGetTopicDetail } from "../services/topic.services";

export const GET_TOPIC = "GET_TOPIC";
export const GET_TOPIC_DETAIL = "GET_TOPIC_DETAIL";
export const GET_TOPIC_USER = "GET_TOPIC_USER";
export const GET_TOPIC_COMMENTS = "GET_TOPIC_COMMENTS";
export const GET_TOPIC_NOK = "GET_TOPIC_NOK";

const actionGetTopic = () => ({
    type: GET_TOPIC,
});

const actionGetTopicDetail = (topicDetail) => ({
    type: GET_TOPIC_DETAIL,
    payload: topicDetail,
});

const actionGetTopicUser = (topicUser) => ({
    type: GET_TOPIC_USER,
    payload: topicUser,
});

const actionGetTopicComments = (comments) => ({
    type: GET_TOPIC_COMMENTS,
    payload: comments,
});

const actionGetTopicNok = () => ({
    type: GET_TOPIC_NOK,
});

export const getTopicDetail = (topicId) => {
    return async (dispatch) => {
        dispatch(actionGetTopic());
        try {
            const topicDetail = await serviceGetTopicDetail(topicId);

            dispatch(actionGetTopicDetail(topicDetail));
        } catch (error) {
            console.log(error);
            dispatch(actionGetTopicNok());
        }
    };
};

export const getTopicUser = (topicDetail) => {
    const topicUser = topicDetail[0].user[0];
    return actionGetTopicUser(topicUser);
};

export const getTopicComments = (topicDetail) => {
    const topicComments = topicDetail[0].comments;
    return actionGetTopicComments(topicComments);
};
