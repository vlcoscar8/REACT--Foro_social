import React, { useEffect, useState } from "react";
import FamilyTopicCard from "./components/familyTopicCard/FamilyTopicCard";
import { environment } from "../../environment/environment";

const Home = ({ listenHomeClick }) => {
    const [familyTopics, setFamilyTopics] = useState([]);

    useEffect(() => {
        fetch(`${environment.API_URL}/topic/family`)
            .then((res) => res.json())
            .then((data) => setFamilyTopics(data));
    }, []);

    return (
        <>
            {familyTopics ? (
                <section className="home">
                    {familyTopics.map((family) => (
                        <FamilyTopicCard
                            family={family}
                            key={family.id}
                            listenHomeClick={listenHomeClick}
                        />
                    ))}
                </section>
            ) : (
                <h1>Loading...</h1>
            )}
        </>
    );
};

export default Home;
