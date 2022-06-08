import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFamilyTopicsList } from "../actions/familyActions";

export function useFamilyList() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFamilyTopicsList());
    }, [dispatch]);

    return useSelector((state) => state.family);
}
