import { serviceGetFamilyList } from "../services/familyList.services";

export const GET_FAMILY_LIST = "GET_FAMILY_LIST";
export const GET_FAMILY_LIST_OK = "GET_FAMILY_LIST_OK";
export const GET_FAMILY_LIST_ERROR = "GET_FAMILY_LIST_ERROR";

const actionGetFamilyList = () => ({
    type: GET_FAMILY_LIST,
});

const actionGetFamilyListOk = (familyList) => ({
    type: GET_FAMILY_LIST_OK,
    payload: familyList,
});

const actionGetFamilyListError = () => ({
    type: GET_FAMILY_LIST_ERROR,
});

export function getFamilyList() {
    return async (dispatch) => {
        dispatch(actionGetFamilyList());

        try {
            const familyList = await serviceGetFamilyList();

            dispatch(actionGetFamilyListOk(familyList));
        } catch (error) {
            console.log(error);
            dispatch(actionGetFamilyListError());
        }
    };
}
