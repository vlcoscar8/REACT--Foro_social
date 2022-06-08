import { environment } from "../environment/environment";

export const serviceGetUserDetail = async (userId) => {
    const response = await fetch(`${environment.API_URL}/user/${userId}`);
    const data = response.json();

    return data;
};
