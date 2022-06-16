import { environment } from "../../../../../environment/environment";
import { serviceGetUserDetail } from "../../../../../state/services/user.services";

export const buyAvatarImage = async (
    avatarSelected,
    userUpdated,
    userLogged
) => {
    const body = {
        avatarId: avatarSelected.id,
        coins: userUpdated.coins - avatarSelected.price,
    };

    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    };

    const response = await fetch(
        `${environment.API_URL}/user/edit/${userLogged.userId}`,
        requestOptions
    );

    const data = response.json();

    return data;
};

export const setAvatarProfile = async (avatarSelected, userLogged) => {
    const body = {
        avatarImg: avatarSelected.img,
    };

    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    };

    await fetch(
        `${environment.API_URL}/user/avatar/${userLogged.userId}`,
        requestOptions
    );
};

export const setUserFetched = async (userLogged) => {
    const userController = {
        type: "ID",
        payload: userLogged.userId,
    };

    await serviceGetUserDetail(userController);
};
