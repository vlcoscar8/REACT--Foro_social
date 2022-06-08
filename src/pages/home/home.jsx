import React from "react";
import FamilyTopicCard from "./components/familyTopicCard/FamilyTopicCard";
import { useFamilyList } from "../../customHooks/useFamilyList";
import Loading from "../../components/shared/loading/Loading";

const Home = () => {
    const { familyList, error, loading } = useFamilyList();

    return (
        <>
            {!loading && familyList ? (
                <section className="home">
                    {familyList.map((family) => (
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
