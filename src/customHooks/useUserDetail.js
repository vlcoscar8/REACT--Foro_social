import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getUserDetail from "../actions/userDetailActions";

export default function useUserDetail(userController) {
    const dispach = useDispatch();

    useEffect(() => {
        dispach(getUserDetail(userController));
    }, [dispach]);

    return useSelector((state) => state.userDetail);
}
