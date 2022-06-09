import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTopicDetail } from "../state/actions/topicActions";

export default function useTopicDetail(topicId) {
    const dispatch = useDispatch();
    const { topicDetail, done } = useSelector((state) => state.topic);

    useEffect(() => {
        dispatch(getTopicDetail(topicId));
    }, [dispatch, topicId]);

    return { topicDetail, done };
}
