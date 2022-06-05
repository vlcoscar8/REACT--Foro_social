import React from "react";

const BtnFollow = ({ page }) => {
    return (
        <button
            className={page === "card" ? "follow-card-btn" : "follow-topic-btn"}
        >
            Follow
        </button>
    );
};

export default BtnFollow;
