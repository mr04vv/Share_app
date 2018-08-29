import cookie from 'react-cookies'

const Login_URL = 'http://localhost:4567/login';

export const Login = "LOGIN";
export const LogoutType = "LOGOUT";
export const ReceiveType = "RECEIVE";
export const ReceiveReqType = "RECEIVE_REQUEST";
export const ReceiveFailure = 'RECEIVE_FAILURE';
export const InitError = 'INIT_ERROR';

function receiveUserData(json) {

    cookie.save('token',json.token);
    return {
        type: ReceiveType,
        token: json.token,
        name: json.name,
        group: json.group,
        json: json,
    }
}


export function receiveRequest () {
    return {
        type: ReceiveReqType
    }
}

export function receiveFailure(err) {
    return {
        type: ReceiveFailure,
        err: err
    }
}

export const loginAction = (name,pass) => {

    console.log(name);
    console.log(pass);

    return (dispatch) => {
        dispatch(receiveRequest());
        return fetch(Login_URL, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                password: pass
            }),
        })
            .then((response) => response.json())
            .then(json => dispatch(receiveUserData(json)))
            .catch(err => dispatch(receiveFailure(err)));
    }
};


export const logout = (token) => {
    cookie.save('token','');
    return {
        type: LogoutType,
        payload: {
            token,
        }
    }
};

export const initErr = (err) => {
    return {
        type: InitError,
        payload: {
            err
        }
    }
};


