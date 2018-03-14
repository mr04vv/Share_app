import {EmailType, PassType, LoginType, LogoutType, ErrorType} from "../actions/LoginAction";
import {RegisterType} from "../actions/RegisterAction";
/* Storeの実装 */
const initialState = () => {
    return {
        email: "",
        password: "",
        confirmPass: '',
        isLogin: false,
        error: ""
    }
};

//actuonで定義したtypeを元に調整

export default function Reducer(state=initialState, action) {
    switch(action.type){
        case EmailType:
            return Object.assign({}, state, {
                email: action.payload.email
            });
        case PassType:
            return Object.assign({}, state, {
                password: action.payload.password,
                confirmPass: action.payload.confirmPass
            });
        case LoginType:
            return Object.assign({}, state, {
                isLogin: true
            });
        case LogoutType:
            return Object.assign({}, state, {
                isLogin: false,
                email: action.payload.email,
                password: action.payload.password,
                error: action.payload.error
            });
        case ErrorType:
            return Object.assign({}, state, {
                error: '必須項目です'
            });
        case RegisterType:
            return Object.assign({}, state, {
                email: action.payload.email,
                password: 'pass',
                confirmPass: 'pass'
            });
        default:
            return state;
    }
}