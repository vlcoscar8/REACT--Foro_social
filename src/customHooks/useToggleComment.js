import { useEffect, useState } from "react";
import { environment } from "../environment/environment";

export const useToggleComment = (isComment, comment) => {
    const [user, setUser] = useState();
    const [reply, setReply] = useState();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (isComment) {
            try {
                fetch(`${environment.API_URL}/user/${comment.user}`)
                    .then((res) => res.json())
                    .then((data) => {
                        setUser(data);
                        setIsLoaded(true);
                    });
            } catch (error) {
                console.log(error);
            }
        } else {
            try {
                fetch(`${environment.API_URL}/comment/${comment}`)
                    .then((res) => res.json())
                    .then((data) => {
                        setReply(data);

                        fetch(`${environment.API_URL}/user/${data.user[0]}`)
                            .then((res) => res.json())
                            .then((data) => {
                                setUser(data);
                                setIsLoaded(true);
                            });
                    });
            } catch (error) {
                console.log(error);
            }
        }
    }, []);

    return { user, reply, isLoaded };
};
