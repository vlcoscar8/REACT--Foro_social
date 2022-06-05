import React, { useContext } from "react";
import FamilyTopicCard from "../../components/familyTopicCard/FamilyTopicCard";
import { ForoContext } from "../../context/apiContext";

const Home = ({ listenHomeClick }) => {
    const familyTopicsList = useContext(ForoContext);

    return (
        <section className="home">
            {familyTopicsList.map((family) => (
                <FamilyTopicCard
                    family={family}
                    key={family.id}
                    listenHomeClick={listenHomeClick}
                />
            ))}
        </section>
    );
};

export default Home;
