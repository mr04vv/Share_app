import {Login, LogoutType} from "../actions/LoginAction";
import {RegisterFailureType, RegisterReceiveType, RegisterType} from "../actions/RegisterAction";
import * as actions from '../actions/LoginAction'
import cookie from 'react-cookies'
import {HomeType} from "../actions/HomeAction";
/* Storeの実装 */


const initialState = {
        token : cookie.load('token'),
        userName: "",
        err: "",
        json: {}
};

//actuonで定義したtypeを元に調整

export default function Reducer(state=initialState, action) {
    switch(action.type){
        case Login:
            return Object.assign({}, state, {
                userName: action.payload.name,
                token: "login"
            });
        case LogoutType:
            return Object.assign({}, state, {
                token: ""
            });
        case RegisterType:
            return Object.assign({}, state, {

            });
        case actions.ReceiveType:
            return Object.assign({}, state, {
                userName: action.name,
                token: action.token,
                err: ""
            });
        case actions.ReceiveFailure:
            return Object.assign({}, state, {
                err: action.error
            });
        case actions.InitError:
            return Object.assign({}, state, {
                err: ""
            });
        case RegisterFailureType:
            return Object.assign({}, state, {
                err: action.error
            });
        case RegisterReceiveType:
            return Object.assign({}, state, {
                userName: action.name
            });
        case HomeType:
            return Object.assign({}, state, {
               userName: action.name
            });

        default:
            return state;
    }
}