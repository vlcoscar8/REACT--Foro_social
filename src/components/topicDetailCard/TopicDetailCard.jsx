import React, { useEffect, useState } from "react";

const API_URL = "https://foro-api-oscar.herokuapp.com";

const TopicDetailCard = ({ topic }) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const userId = topic.user[0];

        try {
            fetch(`${API_URL}/user/${userId}`)
                .then((res) => res.json())
                .then((data) => setUser(data));
        } catch (error) {
            console.log(error);
        }
    }, [topic]);

    console.log(user);
    return <figure>hola</figure>;
};

export default TopicDetailCard;
