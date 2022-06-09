import { environment } from "../../environment/environment";

export const serviceGetTopicDetail = async (topicId) => {
    const response = await fetch(`${environment.API_URL}/topic/${topicId}`);

    const data = await response.json();

    return data;
};
