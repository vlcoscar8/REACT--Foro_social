import { serviceGetFamilyDetail } from "../services/familyDetail";

export const GET_FAMILY_DETAIL = "GET_FAMILY_DETAIL";
export const GET_FAMILY_DETAIL_OK = "GET_FAMILY_DETAIL_OK";
export const GET_FAMILY_DETAIL_NOK = "GET_FAMILY_DETAIL_NOK";

const actionGetFamilyDetail = () => ({
    type: GET_FAMILY_DETAIL,
});

const actionGetFamilyDetailOk = (topicList) => ({
    type: GET_FAMILY_DETAIL_OK,
    payload: topicList,
});

const actionGetFamilyDetailNok = () => ({
    type: GET_FAMILY_DETAIL_NOK,
});

export function getFamilyDetail(id) {
    return async (dispatch) => {
        dispatch(actionGetFamilyDetail());
        try {
            const topicList = await serviceGetFamilyDetail(id);

            dispatch(actionGetFamilyDetailOk(topicList));
        } catch (error) {
            console.log(error);
            dispatch(actionGetFamilyDetailNok());
        }
    };
}
