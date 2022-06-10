import React from "react";

const BtnComment = ({ showModalFunction, topicTitle }) => {
    const handleShowModal = () => {
        console.log(topicTitle);
        showModalFunction(true, "comment", topicTitle);
    };
    return (
        <button className="comment-btn" onClick={handleShowModal}>
            Add commentary
        </button>
    );
};

export default BtnComment;
