import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "../../components/core/comment/Comment";
import TopicHeader from "../../components/core/topicHeader/TopicHeader";

const API_URL = "https://foro-api-oscar.herokuapp.com";

const TopicDetail = () => {
    const { id } = useParams();
    const [topic, setTopic] = useState();
    const [user, setUser] = useState();
    const [comments, setComments] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        try {
            fetch(`${API_URL}/topic/${id}`)
                .then((res) => res.json())
                .then((data) => {
                    setTopic(data[0]);
                    setUser(data[0].user[0]);
                    setComments(data[0].comments);
                    setIsLoaded(true);
                });
        } catch (error) {
            console.log(error);
        }
    }, [id]);

    return (
        <>
            {isLoaded ? (
                <section className="topic">
                    <TopicHeader topic={topic} user={user} />
                    {comments.map((comment) => (
                        <Comment comment={comment} key={comment.id} />
                    ))}
                </section>
            ) : (
                <h1>Is loading...</h1>
            )}
        </>
    );
};

export default TopicDetail;
