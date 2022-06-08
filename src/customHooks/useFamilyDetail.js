import { useDispatch, useSelector } from "react-redux";
import { getFamilyDetail } from "../actions/familyDetailActions";
import { store } from "../store/store";

export function useFamilyDetail(id) {
    const dispatch = useDispatch();

    const { familyDetail } = store.getState();

    if (familyDetail.family.length === 0) {
        dispatch(getFamilyDetail(id));
    }

    return useSelector((state) => state.familyDetail);
}
