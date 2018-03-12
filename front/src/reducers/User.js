import React from 'react'
import {EmailType, PassType} from "../actions/LoginAction";

/* Storeの実装 */
const initialState = () => {
    return {
        email: "",
        password: ""
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
        default:
            return state;
    }
}