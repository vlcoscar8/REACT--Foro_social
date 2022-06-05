import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_URL = "https://foro-api-oscar.herokuapp.com";

const FamilyTopicDetail = () => {
    const [familyDetail, setFamilyDetail] = useState([]);
    const { id } = useParams();

    console.log(familyDetail);

    useEffect(() => {
        fetch(`${API_URL}/topic/family/${id}`)
            .then((res) => res.json())
            .then((data) => setFamilyDetail(data));
    }, [id]);

    return <div></div>;
};

export default FamilyTopicDetail;
