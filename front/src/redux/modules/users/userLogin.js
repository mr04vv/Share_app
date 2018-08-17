import cookie from 'react-cookies'
import client from "utilities/apiClient";

const MODULE_NAME = "USER_LOGIN";
const initialState = {
  data: null
};

export const LOGIN = `redux/${MODULE_NAME}/LOGIN`;
export const LOGIN_SUCCESS = `redux/${MODULE_NAME}/LOGIN_SUCCESS`;
export const LOGIN_FAIL = `redux/${MODULE_NAME}/RECEIVE_FAIL`;
export const LOGOUT = `redux/${MODULE_NAME}/LOGOUT`;

// Reducer
export default function userLogin(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: true,
        status: "check"
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        status: "success"
      };

    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        loaded: true,
        status: "fail"
      };

    case LOGOUT:
      return {
        ...state,
        status: "logout"
      };

    default:
      return state;
  }
}

function isLoading() {
  return {
    type: LOGIN
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
    dispatch(isLoading());
    return client.post(, {
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


