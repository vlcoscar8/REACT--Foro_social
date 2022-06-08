import React from "react";

const FamilyHeader = ({ logo, title }) => {
    return (
        <figure className="family__header">
            <img src={logo} alt={title} className="family__header--logo" />
            <h2 className="family__header--title">{title}</h2>
        </figure>
    );
};

export default FamilyHeader;
