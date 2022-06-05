import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import TopicDetailCard from "../../components/topicDetailCard/TopicDetailCard";

const API_URL = "https://foro-api-oscar.herokuapp.com";

const FamilyTopicDetail = () => {
    const [familyDetail, setFamilyDetail] = useState();
    const [isLoaded, setIsLoaded] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        try {
            fetch(`${API_URL}/topic/family/${id}`)
                .then((res) => res.json())
                .then((data) => {
                    setFamilyDetail(data[0]);
                    setIsLoaded(true);
                });
        } catch (error) {
            console.log(error);
        }
    }, [id]);

    return (
        <>
            {isLoaded ? (
                <section className="family">
                    <figure className="family__header">
                        <img
                            src={familyDetail.logo}
                            alt={familyDetail.title}
                            className="family__header--logo"
                        />
                        <h2 className="family__header--title">
                            {familyDetail.title}
                        </h2>
                    </figure>
                    <div className="family__topics">
                        {familyDetail.topics.map((topic) => (
                            <Link to={`/topic/${topic.id}`}>
                                <TopicDetailCard key={topic.id} topic={topic} />
                            </Link>
                        ))}
                    </div>
                </section>
            ) : (
                <h2>Loading...</h2>
            )}
        </>
    );
};

export default FamilyTopicDetail;
