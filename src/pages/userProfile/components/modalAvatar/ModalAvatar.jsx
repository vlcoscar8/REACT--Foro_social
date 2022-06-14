import { faGem, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import AvatarList from "../avatarList/AvatarList";
import { environment } from "../../../../environment/environment";
import { AuthStateContext } from "../../../../state/context/authStateContext";

const ModalAvatar = ({ showModal, modal }) => {
    const { userData, userLogged } = useContext(AuthStateContext);
    const [avatarSelected, setAvatarSelected] = useState();
    const [error, setError] = useState();

    const handleShowModal = () => {
        showModal(false);
    };

    const handleSetAvatar = (avatarDetail) => {
        avatarSelected && avatarSelected.id === avatarDetail.id
            ? setAvatarSelected()
            : setAvatarSelected(avatarDetail);
    };

    const handleEditButton = () => {
        const body = {
            avatarId: avatarSelected.id,
        };

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        };
        avatarSelected &&
            avatarSelected.users.includes(userLogged.userId) &&
            fetch(
                `${environment.API_URL}/user/avatar/${userLogged.userId}`,
                requestOptions
            )
                .then((res) => res.json())
                .then((data) => console.log(data));

        avatarSelected &&
            !avatarSelected.users.includes(userLogged.userId) &&
            setError("You don't have the avatar yet");
    };

    const handleBuyButton = () => {
        const body = {
            avatarProfile: avatarSelected.img,
            coins: avatarSelected.price,
        };

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        };

        avatarSelected &&
            !avatarSelected.users.includes(userLogged.userId) &&
            fetch(
                `${environment.API_URL}/user/edit/${userLogged.userId}`,
                requestOptions
            )
                .then((res) => res.json())
                .then((data) => console.log(data));

        avatarSelected &&
            avatarSelected.users.includes(userLogged.userId) &&
            setError("Not money enough or you have already the avatar");
    };

    return (
        <>
            <section
                className={modal ? "modal-avatar" : "modal-avatar no-active"}
            >
                <button onClick={handleShowModal} className="btn__close">
                    <FontAwesomeIcon icon={faXmark} className="icon" />
                </button>
                <div className="modal-avatar__image">
                    <img
                        src={userData.avatarProfile}
                        alt="avatar"
                        className="img"
                    />
                    <div className="coins">
                        <FontAwesomeIcon icon={faGem} className="icon" />
                        <p>{userData.coins}</p>
                        <p className="coins__price">
                            {avatarSelected &&
                                ` Price: ${avatarSelected.price}`}
                        </p>
                    </div>
                </div>
                <div className="modal-avatar__buttons">
                    {error && <p>{error}</p>}
                    <button
                        className={
                            avatarSelected &&
                            avatarSelected.users.includes(userLogged.userId)
                                ? "modal-avatar__buttons--btn"
                                : "modal-avatar__buttons--btn disabled"
                        }
                        onClick={handleEditButton}
                    >
                        Edit
                    </button>
                    <button
                        className={
                            avatarSelected &&
                            !avatarSelected.users.includes(userLogged.userId)
                                ? "modal-avatar__buttons--btn"
                                : "modal-avatar__buttons--btn disabled"
                        }
                        onClick={handleBuyButton}
                    >
                        Buy
                    </button>
                </div>
                <AvatarList
                    userData={userData}
                    userId={userLogged.userId}
                    handleSetAvatar={handleSetAvatar}
                />
            </section>
            <div
                className={
                    modal
                        ? "modal-avatar__overlay"
                        : "modal-avatar__overlay no-active"
                }
            ></div>
        </>
    );
};

export default ModalAvatar;
