import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
    getTopicComments,
    getTopicUser,
} from "../../state/actions/topicActions";
import useTopicDetail from "../../customHooks/useTopicDetail";
import Comment from "./components/comment/Comment";
import TopicHeader from "./components/topicHeader/TopicHeader";

const TopicDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { topicDetail, done } = useTopicDetail(id);
    const { topicUser, topicComments } = useSelector((state) => state.topic);
    window.scrollTo(0, 0);

    useEffect(() => {
        done && dispatch(getTopicUser(topicDetail));
        done && dispatch(getTopicComments(topicDetail));
    }, [dispatch, done, topicDetail]);

    return (
        <>
            {done ? (
                <section className="topic" id="">
                    <TopicHeader topic={topicDetail[0]} owner={topicUser} />
                    {topicComments.map((comment) => {
                        return (
                            <>
                                <Comment
                                    comment={comment}
                                    key={comment.id}
                                    isComment={true}
                                />
                                {comment.replies.length > 0 &&
                                    comment.replies.map((reply) => {
                                        return (
                                            <Comment
                                                comment={reply}
                                                key={reply}
                                                isComment={false}
                                            />
                                        );
                                    })}
                            </>
                        );
                    })}
                </section>
            ) : (
                <h1>Is loading...</h1>
            )}
        </>
    );
};

export default TopicDetail;
