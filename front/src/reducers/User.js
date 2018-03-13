import {EmailType, PassType, LoginType, LogoutType} from "../actions/LoginAction";

/* Storeの実装 */
const initialState = () => {
    return {
        email: "",
        password: "",
        isLogin: false
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
                password: action.payload.password
            });
        case LoginType:
            return Object.assign({}, state, {
                isLogin: true
            });
        case LogoutType:
            return Object.assign({}, state, {
                isLogin: false,
                email: action.payload.email
            });
        default:
            return state;
    }
}