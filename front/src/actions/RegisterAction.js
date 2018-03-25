import {ReceiveFailure, ReceiveReqType, ReceiveType} from "./LoginAction";

export const RegisterType = 'REGISTER';
export const RegisterReceiveType = 'REGISTER_RECEIVE';
export const RegisterReqType = 'REGISTER_REQUEST';
export const RegisterFailureType = 'REGISTER_FAILURE';

const REGISTER_URL = 'http://localhost:4567/users';

function receiveRegisterData(json) {
    return {
        type: RegisterReceiveType,
        name: json.name
    }
}

function receiveRequest () {
    return {
        type: RegisterReqType
    }
}

function receiveFailure(error) {
    return {
        type: RegisterFailureType,
        error: error
    }
}


export const register = (status) => {
    return {
        type: RegisterType,
        payload: {
            status
        }
    }
};

export const registerAction = (name,password) => {


    console.log(name);
    console.log(password);

    return (dispatch) => {
        dispatch(receiveRequest());
        return fetch(REGISTER_URL, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                password: password
            }),
        })
            .then((response) => response.json())
            .then(json => dispatch(receiveRegisterData(json)))
            .catch(err => dispatch(receiveFailure(err)));
    }
};
