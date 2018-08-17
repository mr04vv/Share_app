import cookie from 'react-cookies'

const GET_ME_URL = 'http://localhost:4567/users/me';

export const HomeType = "AUTO_LOGIN";
export const HomeReqType = "AUTO_LOGIN_REQUEST";
export const HomeFailure = 'AUTO_LOGIN_FAILURE';

function receiveUserData(json) {
    return {
        type: HomeType,
        data: json,
        name: json.name,
        logged: true
    }
}

function receiveRequest () {
    return {
        type: HomeReqType
    }
}

function receiveFailure(err) {
    return {
        type: HomeFailure,
        err: err
    }
}

export const homeAction = () => {

    return (dispatch) => {
        dispatch(receiveRequest());
        return fetch(GET_ME_URL, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'token': cookie.load("token")
            },
        })
            .then((response) => response.json())
            .then(json => {
                dispatch(receiveUserData(json))
            })
            .catch(err => {
                dispatch(receiveFailure(err))
            });

    };
};
