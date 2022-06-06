import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserHeader from "../../components/core/userHeader/UserHeader";
import { environment } from "../../environment/environment";

const UserProfile = () => {
    const { username } = useParams();
    const [user, setUser] = useState();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch(`${environment.API_URL}/user/name/${username}`)
            .then((res) => res.json())
            .then((data) => {
                setUser(data);
                setIsLoaded(true);
            });
    }, [username]);

    return (
        <>
            {isLoaded ? (
                <section className="user-profile">
                    <UserHeader user={user} />
                </section>
            ) : (
                <h1>Is loading</h1>
            )}
        </>
    );
};

export default UserProfile;
