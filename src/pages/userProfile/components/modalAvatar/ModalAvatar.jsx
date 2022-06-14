import { faGem, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import AvatarList from "../avatarList/AvatarList";
import { environment } from "../../../../environment/environment";
import { AuthStateContext } from "../../../../state/context/authStateContext";
import { serviceGetUserDetail } from "../../../../state/services/user.services";

const ModalAvatar = ({ userDetail, showModal, modal }) => {
    const { userLogged } = useContext(AuthStateContext);
    const [userUpdated, setUserUpdated] = useState(userDetail);
    const [clicked, setClicked] = useState(false);
    const [avatarSelected, setAvatarSelected] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        setUserFetched();
        setTimeout(() => {
            setError(false);
        }, 3000);
    }, [clicked]);

    const setUserFetched = async () => {
        const userController = {
            type: "ID",
            payload: userLogged.userId,
        };

        const data = await serviceGetUserDetail(userController);
        setUserUpdated(data);
    };

    const handleShowModal = () => {
        showModal(false);
    };

    const handleSetAvatar = (avatarDetail) => {
        avatarSelected && avatarSelected.id === avatarDetail.id
            ? setAvatarSelected()
            : setAvatarSelected(avatarDetail);
    };

    const handleEditButton = async () => {
        setClicked(false);
        const body = {
            avatarImg: avatarSelected.img,
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
                .then(() => setClicked(true));
    };

    const handleBuyButton = async () => {
        setClicked(false);
        const body = {
            avatarId: avatarSelected.id,
            coins: userUpdated.coins - avatarSelected.price,
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
                .then((data) => !data.username && setError("Too expensive"))
                .then(() => setClicked(true));
    };

    return (
        <>
            {userUpdated && (
                <section
                    className={
                        modal ? "modal-avatar" : "modal-avatar no-active"
                    }
                >
                    <button onClick={handleShowModal} className="btn__close">
                        <FontAwesomeIcon icon={faXmark} className="icon" />
                    </button>
                    <div className="modal-avatar__image">
                        <img
                            src={userUpdated.avatarProfile}
                            alt="avatar"
                            className="img"
                        />

                        <div className="coins">
                            <FontAwesomeIcon icon={faGem} className="icon" />
                            <p>{userUpdated.coins}</p>
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
                                !avatarSelected.users.includes(
                                    userLogged.userId
                                )
                                    ? "modal-avatar__buttons--btn"
                                    : "modal-avatar__buttons--btn disabled"
                            }
                            onClick={handleBuyButton}
                        >
                            Buy
                        </button>
                    </div>
                    <AvatarList
                        userData={userUpdated}
                        userId={userLogged.userId}
                        handleSetAvatar={handleSetAvatar}
                    />
                </section>
            )}
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
