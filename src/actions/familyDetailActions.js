import { serviceGetFamilyDetail } from "../services/familyDetail.services";

export const GET_FAMILY_DETAIL = "GET_FAMILY_DETAIL";
export const GET_FAMILY_DETAIL_OK = "GET_FAMILY_DETAIL_OK";
export const GET_FAMILY_DETAIL_ERROR = "GET_FAMILY_DETAIL_ERROR";

const actionGetFamilyDetail = () => ({
    type: GET_FAMILY_DETAIL,
});

const actionGetFamilyDetailOk = (familyDetail) => ({
    type: GET_FAMILY_DETAIL_OK,
    payload: familyDetail,
});

const actionGetFamilyDetailError = () => ({
    type: GET_FAMILY_DETAIL_ERROR,
});

export function getFamilyDetail(id) {
    return async (dispatch) => {
        dispatch(actionGetFamilyDetail());
        try {
            const familyDetail = await serviceGetFamilyDetail(id);

            dispatch(actionGetFamilyDetailOk(familyDetail));
        } catch (error) {
            console.log(error);
            dispatch(actionGetFamilyDetailError());
        }
    };
}
