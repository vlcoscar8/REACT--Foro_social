import React from "react";
import FamilyTopicCard from "./components/familyTopicCard/FamilyTopicCard";
import { useFamilyList } from "../../customHooks/useFamilyList";
import Loading from "../../components/shared/loading/Loading";

const Home = () => {
    const { familyTopics, error, loading } = useFamilyList();

    return (
        <>
            {!loading && familyTopics ? (
                <section className="home">
                    {familyTopics.map((family) => (
                        <FamilyTopicCard family={family} key={family.id} />
                    ))}
                </section>
            ) : (
                <Loading />
            )}
            {error && <h1>Error</h1>}
        </>
    );
};

export default Home;
