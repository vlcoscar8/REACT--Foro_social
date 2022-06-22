import { environment } from "../../../../../environment/environment";

export const convertFormData = (values) => {
    const formData = new FormData();

    Object.entries(values).forEach((el) => {
        formData.append(el[0], el[1]);
    });

    return formData;
};

export const postDataToDatabase = async (formData, userId, token) => {
    const requestOptions = {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: formData,
    };
    try {
        const response = await fetch(
            `${environment.API_URL}/user/topic/${userId}`,
            requestOptions
        );

        await response.json();
    } catch (error) {
        return error;
    }
};
