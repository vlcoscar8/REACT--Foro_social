import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFamilyList } from "../state/actions/familyActions";

export function useFamilyList() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFamilyList());
    }, [dispatch]);

    return useSelector((state) => state.family);
}
