import React, { useEffect, useState } from "react";
import { environment } from "../../../environment/environment";

const Reply = ({ key }) => {
    const [reply, setReply] = useState();

    useEffect(() => {
        try {
            fetch(`${environment.API_URL}/comments/${key}`)
                .then((res) => res.json())
                .then((data) => setReply(data));
        } catch (error) {
            console.log(error);
        }
    });
    return <div>Reply</div>;
};

export default Reply;
