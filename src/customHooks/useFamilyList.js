import { useSelector } from "react-redux";

export function useFamilyList() {
    return useSelector((state) => state.family);
}
