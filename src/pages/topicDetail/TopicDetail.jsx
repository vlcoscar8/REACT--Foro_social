import React, { useCallback, useEffect, useRef, useState } from "react";
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
import Loading from "../../components/shared/loading/Loading";
import shortid from "shortid";

const TopicDetail = () => {
    const { id } = useParams();
    const [showModal, setShowModal] = useState(false);
    const [commentType, setCommentType] = useState();
    const [keyComment, setKeyComment] = useState();
    const [show, setShow] = useState(false);
    const [filteredComments, setFilteredComments] = useState();
    const [page, setPage] = useState(0);

    // Redux state modifications
    const { topicDetail, done } = useTopicDetail(id);
    const { topicUser, topicComments } = useSelector((state) => state.topic);
    const dispatch = useDispatch();
    window.scrollTo(0, 0);

    // Manage the modal between comment or reply
    const showModalFunction = (value, type, key) => {
        setShowModal(value);
        setCommentType(type);
        setKeyComment(key);
    };

    // Update the topic detail comments and topic detail user  in redux state
    useEffect(() => {
        done && dispatch(getTopicUser(topicDetail));
        done && dispatch(getTopicComments(topicDetail));
        setTimeout(() => {
            setShow(true);
        }, 2000);
    }, [dispatch, done, topicDetail]);

    // Pagination
    useEffect(() => {
        const filtered = topicComments.slice(page * 3, page * 3 + 3);
        setFilteredComments(filtered);
    }, [topicComments, page]);

    const nextPage = () => {
        const nextPage = page + 1;
        setPage(nextPage);
    };

    const prevPage = () => {
        const prevPage = page + -1;
        setPage(prevPage);
    };

    return (
        <>
            {show ? (
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
                    {filteredComments ? (
                        filteredComments.map((comment) => {
                            return (
                                <>
                                    <Comment
                                        comment={comment}
                                        key={shortid.generate()}
                                        isComment={true}
                                        showModalFunction={showModalFunction}
                                    />
                                    {comment.replies.length > 0 &&
                                        comment.replies.map((reply) => {
                                            return (
                                                <Comment
                                                    comment={reply}
                                                    key={shortid.generate()}
                                                    isComment={false}
                                                />
                                            );
                                        })}
                                </>
                            );
                        })
                    ) : (
                        <Loading />
                    )}
                    <div className="topic__pagination">
                        {page > 0 && <button onClick={prevPage}>Prev</button>}
                        <p>{page + 1}</p>
                        {filteredComments.length > 2 && (
                            <button onClick={nextPage}>Next</button>
                        )}
                    </div>
                </section>
            ) : (
                <Loading />
            )}
        </>
    );
};

export default TopicDetail;
