import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFamilyList } from "../actions/familyListActions";

export function useFamilyList() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFamilyList());
    }, [dispatch]);

    return useSelector((state) => {
        console.log(state.familyList);
        return state.familyList;
    });
}
