import React, { useEffect } from "react";
import FamilyTopicCard from "./components/familyTopicCard/FamilyTopicCard";
import { getFamilyTopicsList } from "../../actions/familyActions";
import { connect } from "react-redux";

const Home = ({ dispatch, familyTopics }) => {
    useEffect(() => {
        // fetch(`${environment.API_URL}/topic/family`)
        //     .then((res) => res.json())
        //     .then((data) => setFamilyTopics(data));
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

const mapStateToProps = (state) => ({
    familyTopics: state.family.familyTopics,
    errors: state.family.errors,
    loading: state.family.loading,
});

export default connect(mapStateToProps)(Home);
