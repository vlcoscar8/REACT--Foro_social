import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

const FamilyTopicCard = ({ family }) => {
    return (
        <article className="family-card">
            <Link
                to={`/family/${family.id}`}
                className="family-card__logo-container"
            >
                <img
                    src={family.logo}
                    alt={family.title}
                    className="family-card__logo-container--logo"
                />
            </Link>
            <Link to={`/family/${family.id}`} className="family-card__info">
                <div className="family-card__info--text">
                    <h2 className="title" data-testid="family-name">
                        {family.title}
                    </h2>
                    <div className="topics-container">
                        <FontAwesomeIcon
                            icon={faBookOpen}
                            className="topics-container__icon"
                        />
                        <p className="topics-container__counter">
                            {family.topics.length}
                        </p>
                    </div>
                </div>
                <FontAwesomeIcon
                    icon={faChevronRight}
                    className="family-card__info--icon"
                />
            </Link>
        </article>
    );
};

export default FamilyTopicCard;
