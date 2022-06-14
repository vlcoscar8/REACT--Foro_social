import { useEffect, useState } from "react";
import { environment } from "../../../../environment/environment";

const AvatarList = ({ userData, userId }) => {
    const [avatarList, setAvatarList] = useState();

    useEffect(() => {
        fetch(`${environment.API_URL}/avatar/list`)
            .then((res) => res.json())
            .then((data) => setAvatarList(data));
    }, []);

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
                                    />
                                ) : (
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThOM3Ym808Y2_G5dRm31W9nymXZ5oKi9_wER6wHPOuwQSWZYOm3noqD9fJtA_DZGqDhqs&usqp=CAU"
                                        className="disable"
                                        alt="default-avatar"
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
                                    />
                                ) : (
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThOM3Ym808Y2_G5dRm31W9nymXZ5oKi9_wER6wHPOuwQSWZYOm3noqD9fJtA_DZGqDhqs&usqp=CAU"
                                        className="disable"
                                        alt="default-avatar"
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
                                    />
                                ) : (
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThOM3Ym808Y2_G5dRm31W9nymXZ5oKi9_wER6wHPOuwQSWZYOm3noqD9fJtA_DZGqDhqs&usqp=CAU"
                                        className="disable"
                                        alt="default-avatar"
                                    />
                                )
                            )}
                </div>
            </div>
        </div>
    );
};

export default AvatarList;
