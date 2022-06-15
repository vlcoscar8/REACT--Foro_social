import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getTopicDetail } from "../../../state/actions/topicActions";
import { environment } from "../../../environment/environment";
import { serviceGetUserDetail } from "../../../state/services/user.services";

const BtnFollow = ({ userId, page, topic, userData }) => {
    const dispatch = useDispatch();
    const [userUpdated, setUserUpdated] = useState(userData);
    const [clicked, setClicked] = useState();

    useEffect(() => {
        dispatch(getTopicDetail(topic.id));
        setUserFetched();
    }, [clicked]);

    const setUserFetched = async () => {
        const userController = {
            type: "ID",
            payload: userId,
        };

        const data = await serviceGetUserDetail(userController);
        setUserUpdated(data);
    };

    const handleButtonFollow = () => {
        setClicked(false);
        const body = {
            topicId: topic.id,
        };

        const requestOptions = {
            method: userUpdated.topicsFollowing.includes(topic.id)
                ? "DELETE"
                : "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        };

        userUpdated.topicsFollowing.includes(topic.id)
            ? fetch(
                  `${environment.API_URL}/user/followed/${userId}`,
                  requestOptions
              )
                  .then((res) => res.json())
                  .then(() => {
                      setClicked(true);
                      setUserFetched();
                  })
            : fetch(
                  `${environment.API_URL}/user/follow/${userId}`,
                  requestOptions
              )
                  .then((res) => res.json())
                  .then(() => {
                      setClicked(true);
                      setUserFetched();
                  });
    };

    return (
        <button
            className={page === "card" ? "follow-card-btn" : "follow-topic-btn"}
            onClick={handleButtonFollow}
        >
            {userUpdated.topicsFollowing.includes(topic.id)
                ? "Unfollow"
                : "Follow"}
        </button>
    );
};

export default BtnFollow;
