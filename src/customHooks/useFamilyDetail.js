import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFamilyDetail } from "../state/actions/familyActions";

export function useFamilyDetail(id) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFamilyDetail(id));
    }, [dispatch]);

    return useSelector((state) => state.family);
}
