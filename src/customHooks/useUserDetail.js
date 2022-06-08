import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getUserDetail from "../actions/userDetailActions";

export default function useUserDetail(userId) {
    const dispach = useDispatch();

    useEffect(() => {
        dispach(getUserDetail(userId));
    }, [dispach, userId]);

    return useSelector((state) => state.userDetail);
}
