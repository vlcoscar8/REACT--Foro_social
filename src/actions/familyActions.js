import { serviceGetFamilyTopicList } from "../services/familyTopicList";

export const GET_FAMILY = "GET_FAMILY";
export const GET_FAMILY_OK = "GET_FAMILY_OK";
export const GET_FAMILY_ERROR = "GET_FAMILY_ERROR";

export const actionGetFamily = () => ({
    type: GET_FAMILY,
});

export const actionGetFamilyOk = (familyList) => ({
    type: GET_FAMILY_OK,
    payload: familyList,
});

export const actionGetFamilyError = () => ({
    type: GET_FAMILY_ERROR,
});

export function getFamilyTopicsList() {
    return async (dispatch) => {
        dispatch(actionGetFamily());

        try {
            const familyList = await serviceGetFamilyTopicList();

            dispatch(actionGetFamilyOk(familyList));
        } catch (error) {
            console.log(error);
            dispatch(actionGetFamilyError());
        }
    };
}
