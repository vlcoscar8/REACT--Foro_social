import React, { useEffect, useState } from "react";
import FamilyTopicCard from "./components/familyTopicCard/FamilyTopicCard";
import { useFamilyList } from "../../customHooks/useFamilyList";
import Loading from "../../components/shared/loading/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    const { familyList, error, done } = useFamilyList();
    const [familyListFiltered, setFamilyListFiltered] = useState();
    const [sort, setSort] = useState(false);
    const [reset, setReset] = useState(false);

    useEffect(() => {
        setFamilyListFiltered(familyList);
    }, [familyList]);

    // Search filter function
    const handleChangeInput = (e) => {
        setFamilyListFiltered(
            familyList.filter((el) =>
                e.target.value.length === 0
                    ? el
                    : el.title.toLowerCase().includes(e.target.value)
            )
        );
    };

    // Sort function depending on the numbers of topics
    const handleSort = () => {
        setSort(!sort);
        setReset(false);
        familyListFiltered.sort((a, b) =>
            sort
                ? a.topics.length - b.topics.length
                : b.topics.length - a.topics.length
        );
    };

    // Reset list function by id
    const handleReset = () => {
        setSort(false);
        setReset(true);
        familyListFiltered.sort((a, b) => parseInt(a.id) - parseInt(b.id));
    };

    return (
        <>
            {done && familyListFiltered ? (
                <section className="home">
                    <div className="home__filters">
                        <label className="home__filters--find">
                            <p>Search</p>
                            <input
                                type="text"
                                name="find"
                                onChange={handleChangeInput}
                            />
                            <FontAwesomeIcon
                                icon={faMagnifyingGlass}
                                className="icon"
                            />
                        </label>
                        <button onClick={handleSort} className="btn">
                            Sort
                        </button>
                        <button
                            onClick={handleReset}
                            className={`${
                                reset ? "btn disabled" : "btn active"
                            }`}
                        >
                            Reset
                        </button>
                    </div>
                    {familyListFiltered.map((family) => (
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
