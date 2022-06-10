import { environment } from "../../environment/environment";

export const serviceGetUserDetail = async (userController) => {
    const response = await fetch(
        `${environment.API_URL}/user/${
            userController.type === "ID"
                ? userController.payload
                : `name/${userController.payload}`
        }`
    );
    const data = response.json();
    return data;
};
