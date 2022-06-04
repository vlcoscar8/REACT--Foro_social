import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faMessage } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

const FamilyTopicCard = ({ family }) => {
    return (
        <article className="family">
            <Link
                to={"/family/" + family.id}
                className="family__logo-container"
            >
                <img
                    src={family.logo}
                    alt={family.title}
                    className="family__logo-container--logo"
                />
            </Link>
            <Link to={"/family/" + family.id} className="family__info">
                <div className="family__info--text">
                    <h2 className="title">{family.title}</h2>
                    <div className="topics-container">
                        <FontAwesomeIcon
                            icon={faMessage}
                            className="topics-container__icon"
                        />
                        <p className="topics-container__counter">
                            {family.topics.length}
                        </p>
                    </div>
                </div>
                <FontAwesomeIcon
                    icon={faChevronRight}
                    className="family__info--icon"
                />
            </Link>
        </article>
    );
};

export default FamilyTopicCard;
