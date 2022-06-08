import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFamilyDetail } from "../../customHooks/useFamilyDetail";
import { environment } from "../../environment/environment";
import FamilyHeader from "./components/familyHeader/FamilyHeader";
import TopicDetailCard from "./components/topicDetailCard/TopicDetailCard";

const FamilyTopicDetail = () => {
    const [familyDetail, setFamilyDetail] = useState();
    const [isLoaded, setIsLoaded] = useState(false);
    const { id } = useParams();

    const { family, loading, error } = useFamilyDetail(id);

    console.log(family);

    useEffect(() => {
        try {
            fetch(`${environment.API_URL}/topic/family/${id}`)
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
                    <FamilyHeader
                        logo={familyDetail.logo}
                        title={familyDetail.title}
                    />
                    <div className="family__topics">
                        {familyDetail.topics.map((topic) => (
                            <TopicDetailCard key={topic.id} topic={topic} />
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
