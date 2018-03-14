import fetchJsonp from 'fetch-jsonp'
import qs from 'qs'
import thunk from 'redux-thunk'

const Login_URL = 'http://localhost:4567/login';

export const EmailType = "EMAIL";
export const PassType = "PASSWORD";
export const LoginType = "LOGIN";
export const LogoutType = "LOGOUT";
export const ErrorType = "ERROR";

export const inputEmail = (email) => {
    return {
        type: EmailType,
        payload: {
            email
        }
    };
};

export const inputPassword = (password, confirmPass) => {
    return {
        type: PassType,
        payload: {
            password,
            confirmPass
        }
    };
};

const startReq = (isLogin,email,password) => ({
    type: 'START_REQ',
    payload: {isLogin,email,password},
});

const recieveData = (isLogin, error, response) => ({
    type: 'RECEIVE_DATA',
    payload: {isLogin,error,response},
});

const finishReq = (isLogin) => ({
    type: 'FINISH_REQ',
    payload: {
        isLogin
    }
});

export const login = (isLogin,email,password) => {

    const delay = (mSec) => new Promise((resolve) => setTimeout(resolve, mSec))

    // fetch(`http://api.openweathermap.org/data/2.5/weather?appid=${this.OpenWeatherMapKey}&id=${
    //       id}&lang=ja&units=metric`)
    fetch(`http://localhost:4567/login`,{
        method: 'POST',
        mode:'cors',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
          name:email,
          password:password
    }),
    })
        .then((response) => response.json())
        .then((json) => {
            delay(700)
                .then(() => this.setState({title: json.title,
                    done: json.done, loading: false}))
        })
        .catch((response) => {
            this.setState({loading: false})
            console.log('** error **', response)
        })
    // return async dispatch => {
    //     dispatch(startReq(isLogin,email,password));
    //
    //     try {
    //         const response = await fetchJsonp('http://localhost:4567/login', {
    //             method: 'POST',
    //             mode: 'cors',
    //             body: JSON.stringify({
    //                 name: email,
    //                 password: password
    //             }),
    //         });
    //         const data = await response.json();
    //         dispatch(recieveData(isLogin, null, data));
    //     } catch (err) {
    //         dispatch(recieveData(isLogin,err));
    //     }
    //     dispatch(finishReq(isLogin));
    // }
};

export const logout = (isLogin,email) => {
    return {
        type: LogoutType,
        payload: {
            isLogin,
            email
        }
    }
};

export const setError = (error) => {
    return {
        type: ErrorType,
        payload: {
            error
        }
    }
};


