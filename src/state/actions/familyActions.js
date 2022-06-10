import {
    serviceGetFamilyDetail,
    serviceGetFamilyList,
} from "../services/familyServices";

export const GET_FAMILY = "GET_FAMILY";
export const GET_FAMILY_LIST_OK = "GET_FAMILY_LIST_OK";
export const GET_FAMILY_DETAIL_OK = "GET_FAMILY_DETAIL_OK";
export const GET_FAMILY_ERROR = "GET_FAMILY_ERROR";

const actionGetFamily = () => ({
    type: GET_FAMILY,
});

const actionGetFamilyListOk = (familyList) => ({
    type: GET_FAMILY_LIST_OK,
    payload: familyList,
});

const actionGetFamilyDetailOk = (familyDetail) => ({
    type: GET_FAMILY_DETAIL_OK,
    payload: familyDetail,
});

const actionGetFamilyError = () => ({
    type: GET_FAMILY_ERROR,
});

export function getFamilyList() {
    return async (dispatch) => {
        dispatch(actionGetFamily());

        try {
            const familyList = await serviceGetFamilyList();

            dispatch(actionGetFamilyListOk(familyList));
        } catch (error) {
            console.log(error);
            dispatch(actionGetFamilyError());
        }
    };
}

export function getFamilyDetail(id) {
    console.log(2);
    return async (dispatch) => {
        dispatch(actionGetFamily());
        try {
            const familyDetail = await serviceGetFamilyDetail(id);
            console.log("hola", 1);
            dispatch(actionGetFamilyDetailOk(familyDetail));
        } catch (error) {
            console.log(error);
            dispatch(actionGetFamilyError());
        }
    };
}
