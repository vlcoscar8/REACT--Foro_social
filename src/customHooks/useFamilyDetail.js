import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFamilyDetail } from "../actions/familyDetailActions";

export function useFamilyDetail(id) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFamilyDetail(id));
    }, [dispatch, id]);

    return useSelector((state) => state.familyDetail);
}
