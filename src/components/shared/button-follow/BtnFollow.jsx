import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getTopicDetail } from "../../../state/actions/topicActions";
import { environment } from "../../../environment/environment";

const BtnFollow = ({ page, userId, topic }) => {
    const dispatch = useDispatch();

    const [clicked, setClicked] = useState();

    useEffect(() => {
        dispatch(getTopicDetail(topic.id));
    }, [clicked]);

    const handleButtonFollow = () => {
        const body = {
            topicId: topic.id,
        };

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        };

        fetch(`${environment.API_URL}/user/follow/${userId}`, requestOptions)
            .then((res) => res.json())
            .then((data) => {
                setClicked(true);
                console.log(data);
            });
    };

    return (
        <button
            className={page === "card" ? "follow-card-btn" : "follow-topic-btn"}
            onClick={handleButtonFollow}
        >
            Follow
        </button>
    );
};

export default BtnFollow;
