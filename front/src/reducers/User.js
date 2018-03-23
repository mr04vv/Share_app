import {Login, LogoutType} from "../actions/LoginAction";
import {RegisterType} from "../actions/RegisterAction";
/* Storeの実装 */

const initialState = {
        token : "",
        userName: ""
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
        default:
            return state;
    }
}