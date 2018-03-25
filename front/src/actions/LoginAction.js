

const Login_URL = 'http://localhost:4567/login';

export const Login = "LOGIN";
export const LogoutType = "LOGOUT";
export const ReceiveType = "RECEIVE";
export const ReceiveReqType = "RECEIVE_REQUEST";
export const ReceiveFailure = 'RECEIVE_FAILURE'

function receiveUserData(json) {
    return {
        type: ReceiveType,
        token: json.token,
        name: json.name

    }
}

function receiveRequest () {
    return {
        type: ReceiveReqType
    }
}

function receiveFailure(error) {
    return {
        type: ReceiveFailure,
        error: error
    }
}

export const loginAction = (name,pass,token) => {

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

    // return {
    //     type: Login,
    //     payload: {
    //         name
    //     }
    // };
    // const delay = (mSec) => new Promise((resolve) => setTimeout(resolve, mSec))

    // fetch(`http://api.openweathermap.org/data/2.5/weather?appid=${this.OpenWeatherMapKey}&id=${
    //       id}&lang=ja&units=metric`)
    // fetch(`http://localhost:4567/login`,{
    //     method: 'POST',
    //     mode:'cors',
    //     headers: {
    //         "Content-Type": "application/json",
    //         Accept: "application/json"
    //     },
    //     body: JSON.stringify({
    //       name:email,
    //       password:password
    // }),
    // })
    //     .then((response) => response.json())
    //     .then((json) => {
    //         delay(700)
    //             .then(() => this.setState({title: json.title,
    //                 done: json.done, loading: false}))
    //     })
    //     .catch((response) => {
    //         this.setState({loading: false})
    //         console.log('** error **', response)
    //     })
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
// };

export const logout = (token) => {
    return {
        type: LogoutType,
        payload: {
            token
        }
    }
};



