import React, { useContext } from "react";
import FamilyTopicCard from "../../components/familyTopicCard/familyTopicCard.component";
import { ForoContext } from "../../context/apiContext";

const Home = () => {
    const familyTopicsList = useContext(ForoContext);

    return (
        <section className="home">
            {familyTopicsList.map((family) => (
                <FamilyTopicCard family={family} key={family.id} />
            ))}
        </section>
    );
};

export default Home;
