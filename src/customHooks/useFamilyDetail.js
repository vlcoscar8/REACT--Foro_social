import { useDispatch, useSelector } from "react-redux";
import { getFamilyDetail } from "../state/actions/familyActions";
import { store } from "../state/store/store";

export function useFamilyDetail(id) {
    const dispatch = useDispatch();

    const { family } = store.getState();

    if (family.familyDetail.length === 0) {
        dispatch(getFamilyDetail(id));
    }

    return useSelector((state) => state.family);
}
