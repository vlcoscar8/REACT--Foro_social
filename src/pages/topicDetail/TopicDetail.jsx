import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
    getTopicComments,
    getTopicUser,
} from "../../state/actions/topicActions";
import useTopicDetail from "../../customHooks/useTopicDetail";
import Comment from "./components/comment/Comment";
import TopicHeader from "./components/topicHeader/TopicHeader";
import ModalAddComment from "./components/modalAddComment/ModalAddComment";
import { faPersonMilitaryToPerson } from "@fortawesome/free-solid-svg-icons";

const TopicDetail = () => {
    const { id } = useParams();
    const [showModal, setShowModal] = useState(false);
    const [commentType, setCommentType] = useState();
    const [keyComment, setKeyComment] = useState();

    // Redux state modifications
    const { topicDetail, done } = useTopicDetail(id);
    const { topicUser, topicComments } = useSelector((state) => state.topic);
    const dispatch = useDispatch();
    window.scrollTo(0, 0);

    const showModalFunction = (value, type, key) => {
        setShowModal(value);
        setCommentType(type);
        setKeyComment(key);
    };

    useEffect(() => {
        done && dispatch(getTopicUser(topicDetail));
        done && dispatch(getTopicComments(topicDetail));
    }, [dispatch, done, topicDetail]);

    return (
        <>
            {done ? (
                <section className="topic" id="">
                    {showModal && (
                        <ModalAddComment
                            showModalFunction={showModalFunction}
                            commentType={commentType}
                            keyComment={keyComment}
                            topicDetail={topicDetail}
                        />
                    )}
                    <TopicHeader
                        topic={topicDetail[0]}
                        owner={topicUser}
                        showModalFunction={showModalFunction}
                    />
                    {topicComments.map((comment) => {
                        return (
                            <>
                                <Comment
                                    comment={comment}
                                    key={comment.id}
                                    isComment={true}
                                    showModalFunction={showModalFunction}
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
