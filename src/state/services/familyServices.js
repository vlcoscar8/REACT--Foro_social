import { environment } from "../../environment/environment";

export const serviceGetFamilyList = async () => {
    const response = await fetch(`${environment.API_URL}/topic/family`);
    const data = response.json();

    return data;
};

export const serviceGetFamilyDetail = async (id) => {
    const response = await fetch(`${environment.API_URL}/topic/family/${id}`);
    const data = response.json();

    return data;
};
