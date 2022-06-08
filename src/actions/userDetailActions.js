import { serviceGetUserDetail } from "../services/userDetail.services";

export const GET_USER_DETAIL = "GET_USER_DETAIL";
export const GET_USER_DETAIL_OK = "GET_USER_DETAIL_OK";
export const GET_USER_DETAIL_NOK = "GET_USER_DETAIL_NOK";

const actionGetUserDetail = () => ({
    type: GET_USER_DETAIL,
});

const actionGetUserDetailOk = (userDetail) => ({
    type: GET_USER_DETAIL_OK,
    payload: userDetail,
});

const actionGetUserDetailNok = () => ({
    type: GET_USER_DETAIL_NOK,
});

export default function getUserDetail(userId) {
    return async (dispach) => {
        dispach(actionGetUserDetail());
        try {
            const userDetail = await serviceGetUserDetail(userId);
            dispach(actionGetUserDetailOk(userDetail));
        } catch (error) {
            console.log(error);
            dispach(actionGetUserDetailNok());
        }
    };
}
