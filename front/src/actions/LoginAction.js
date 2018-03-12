import React from 'react'

const Subscribe = 'SEND';


export function submitText(text) {
    return {
        type: "SUBMIT",
        value: text,
        number: text.length
    };
}

export function showText(text) {
    return {
        type: "SHOW"
        // flag は可変ではなく true 固定のため、 Reducer 側で書く
    };
}

export function hideText(text) {
    return {
        type: "HIDE"
        // flag は可変ではなく false 固定のため、 Reducer 側で書く
    };
}
export const changeText =(text) => {
    return {
        type: "CHANGE_TEXT",
        payload: {
            text
        }
    };
};

export default class LoginAction {

    subscribe(value) {
        return {
            type: Subscribe,
            value,
        }
    }




}