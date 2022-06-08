import { serviceGetUserDetail } from "../services/user.services";

export const GET_USER = "GET_USER";
export const GET_USER_DETAIL_OK = "GET_USER_DETAIL_OK";
export const GET_USER_NOK = "GET_USER_NOK";

const actionGetUser = () => ({
    type: GET_USER,
});

const actionGetUserDetailOk = (userDetail) => ({
    type: GET_USER_DETAIL_OK,
    payload: userDetail,
});

const actionGetUserNok = () => ({
    type: GET_USER_NOK,
});

export default function getUserDetail(userController) {
    return async (dispach) => {
        dispach(actionGetUser());
        try {
            const userDetail = await serviceGetUserDetail(userController);

            dispach(actionGetUserDetailOk(userDetail));
        } catch (error) {
            console.log(error);
            dispach(actionGetUserNok());
        }
    };
}
