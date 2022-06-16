import { useEffect, useState } from "react";
import { environment } from "../../../../environment/environment";
import shortid from "shortid";

const AvatarList = ({ userData, userId, handleSetAvatar }) => {
    const [avatarList, setAvatarList] = useState();
    const [avatarIdClicked, setAvatarIdClicked] = useState();

    useEffect(() => {
        fetch(`${environment.API_URL}/avatar/list`)
            .then((res) => res.json())
            .then((data) => setAvatarList(data));
    }, [userData]);

    // Active or disbale the avatar chosen and pass the avatar detail infomation to buy or edit
    const avatarClick = (e) => {
        const avatarId = parseInt(e.target.id);
        avatarIdClicked === avatarId
            ? setAvatarIdClicked()
            : setAvatarIdClicked(avatarId);

        const avatarDetail = avatarList.find((el) => el.id === avatarId);
        handleSetAvatar(avatarDetail);
    };

    return (
        <div className="avatar-list">
            <div className="avatar-list__card">
                <div className="avatar-list__card--title">
                    <p>Noob</p>
                </div>
                <div className="avatar-list__card--images">
                    {avatarList &&
                        avatarList
                            .filter((el) => el.family === "Noob")
                            .map((el) =>
                                el.users.includes(userId) ? (
                                    <img
                                        src={el.img}
                                        className="active"
                                        alt="noob"
                                        id={el.id}
                                        onClick={avatarClick}
                                        key={shortid.generate()}
                                    />
                                ) : (
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThOM3Ym808Y2_G5dRm31W9nymXZ5oKi9_wER6wHPOuwQSWZYOm3noqD9fJtA_DZGqDhqs&usqp=CAU"
                                        className={
                                            avatarIdClicked === el.id
                                                ? "disable-clicked"
                                                : "disable"
                                        }
                                        alt="default-avatar"
                                        id={el.id}
                                        onClick={avatarClick}
                                        key={shortid.generate()}
                                    />
                                )
                            )}
                </div>
            </div>
            <div className="avatar-list__card">
                <div className="avatar-list__card--title">
                    <p>Amateur</p>
                </div>
                <div className="avatar-list__card--images">
                    {avatarList &&
                        avatarList
                            .filter((el) => el.family === "Amateur")
                            .map((el) =>
                                el.users.includes(userId) ? (
                                    <img
                                        src={el.img}
                                        className="active"
                                        alt="amateur"
                                        id={el.id}
                                        onClick={avatarClick}
                                        key={shortid.generate()}
                                    />
                                ) : (
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThOM3Ym808Y2_G5dRm31W9nymXZ5oKi9_wER6wHPOuwQSWZYOm3noqD9fJtA_DZGqDhqs&usqp=CAU"
                                        className={
                                            avatarIdClicked === el.id
                                                ? "disable-clicked"
                                                : "disable"
                                        }
                                        alt="default-avatar"
                                        id={el.id}
                                        onClick={avatarClick}
                                        key={shortid.generate()}
                                    />
                                )
                            )}
                </div>
            </div>
            <div className="avatar-list__card">
                <div className="avatar-list__card--title">
                    <p>Pro</p>
                </div>
                <div className="avatar-list__card--images">
                    {avatarList &&
                        avatarList
                            .filter((el) => el.family === "Pro")
                            .map((el) =>
                                el.users.includes(userId) ? (
                                    <img
                                        src={el.img}
                                        className="active"
                                        alt="pro"
                                        id={el.id}
                                        onClick={avatarClick}
                                        key={shortid.generate()}
                                    />
                                ) : (
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThOM3Ym808Y2_G5dRm31W9nymXZ5oKi9_wER6wHPOuwQSWZYOm3noqD9fJtA_DZGqDhqs&usqp=CAU"
                                        className={
                                            avatarIdClicked === el.id
                                                ? "disable-clicked"
                                                : "disable"
                                        }
                                        alt="default-avatar"
                                        id={el.id}
                                        onClick={avatarClick}
                                        key={shortid.generate()}
                                    />
                                )
                            )}
                </div>
            </div>
        </div>
    );
};

export default AvatarList;
