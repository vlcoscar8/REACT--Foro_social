import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/shared/loading/Loading";
import { useFamilyDetail } from "../../customHooks/useFamilyDetail";
import FamilyHeader from "./components/familyHeader/FamilyHeader";
import TopicDetailCard from "./components/topicDetailCard/TopicDetailCard";

const FamilyTopicDetail = () => {
    const { id } = useParams();
    const { family, loading, error } = useFamilyDetail(id);

    return (
        <>
            {!loading && family ? (
                <section className="family">
                    <FamilyHeader
                        logo={family[0].logo}
                        title={family[0].title}
                    />
                    <div className="family__topics">
                        {family[0].topics.map((topic) => (
                            <TopicDetailCard key={topic.id} topic={topic} />
                        ))}
                    </div>
                </section>
            ) : (
                <Loading />
            )}
            {error && <h1>Error</h1>}
        </>
    );
};

export default FamilyTopicDetail;
