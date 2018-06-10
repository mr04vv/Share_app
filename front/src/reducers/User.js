import {Login, LogoutType, ReceiveReqType} from "../actions/LoginAction";
import {RegisterFailureType, RegisterReceiveType, RegisterReqType, RegisterType} from "../actions/RegisterAction";
import * as actions from '../actions/LoginAction'
import cookie from 'react-cookies'
import {HomeFailure, HomeReqType, HomeType} from "../actions/HomeAction";
/* Storeの実装 */


const initialState = {
        token : cookie.load('token'),
        userName: "",
        err: "",
        json: {},
        loading: false,
};

//actuonで定義したtypeを元に調整

export default function Reducer(state=initialState, action) {
    switch(action.type){
        case Login:
            return Object.assign({}, state, {
                userName: action.payload.name,
                token: action.payload.token,
                loading: false
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
                err: "",
                loading:false
            });
        case HomeFailure:
            return Object.assign({}, state, {
                loading: false,
            });

        case actions.ReceiveFailure:
        case RegisterFailureType:
            return Object.assign({}, state, {
                err: action.error,
                loading: false
            });
        case actions.InitError:
            return Object.assign({}, state, {
                err: ""
            });
        case RegisterReceiveType:
            return Object.assign({}, state, {
                userName: action.name,
                loading:false
            });
        case HomeType:
            return Object.assign({}, state, {
                userName: action.name,
                logged: action.logged,
                loading: false
            });
        case ReceiveReqType:
        case HomeReqType:
            return Object.assign({}, state, {
                loading: true,
            });
        case RegisterReqType:
            return Object.assign({}, state, {
                loading: true,
            });
        default:
            return state;
    }
}