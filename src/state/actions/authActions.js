import { environment } from "../../environment/environment";

export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_OK = "LOGIN_OK";
export const LOGIN_NOK = "LOGIN_NOK";

const actionLogin = () => ({
    type: LOGIN_LOADING,
});

const actionLoginOk = (data) => ({
    type: LOGIN_OK,
    payload: data,
});

const actionloginNok = () => ({
    type: LOGIN_NOK,
});

export const loginUserFunction = async (body, dispatch) => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    };

    dispatch(actionLogin());

    try {
        const response = await fetch(
            `${environment.API_URL}/user/login`,
            requestOptions
        );
        const data = await response.json();

        if (data === "The email or password is incorrect") {
            dispatch(actionloginNok());
            return data;
        }

        if (!body.username) {
            dispatch(actionLoginOk(data));
            window.localStorage.setItem("userId", data.userId);
            window.localStorage.setItem("token", data.token);
            return data;
        }
    } catch (error) {
        console.log(error);
        dispatch(actionloginNok());
        return;
    }
};
