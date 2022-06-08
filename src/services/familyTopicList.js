import { environment } from "../environment/environment";

export const serviceGetFamilyTopicList = async () => {
    const response = await fetch(`${environment.API_URL}/topic/family`);
    const data = response.json();

    return data;
};
