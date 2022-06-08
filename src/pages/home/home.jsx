import React, { useEffect } from "react";
import FamilyTopicCard from "./components/familyTopicCard/FamilyTopicCard";
import { getFamilyTopicsList } from "../../actions/familyActions";
import { useDispatch } from "react-redux";
import { useFamilyList } from "../../customHooks/useFamilyList";

const Home = () => {
    const { familyTopics, errors, loading } = useFamilyList();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFamilyTopicsList());
    }, [dispatch]);

    return (
        <>
            {familyTopics ? (
                <section className="home">
                    {familyTopics.map((family) => (
                        <FamilyTopicCard family={family} key={family.id} />
                    ))}
                </section>
            ) : (
                <h1>Loading...</h1>
            )}
        </>
    );
};

export default Home;
