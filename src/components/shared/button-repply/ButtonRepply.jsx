import React from "react";

const ButtonRepply = ({ showModalFunction, commentId }) => {
    const handleShowModal = () => {
        showModalFunction(true, "reply", commentId);
    };
    return (
        <button className="reply-btn" onClick={handleShowModal}>
            Reply
        </button>
    );
};

export default ButtonRepply;
