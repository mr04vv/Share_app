import React from 'react'

/* Storeの実装 */
//
// const initialState = {
//     flag: true,
//     value: "入力してください",
//     number: 0
// };
//
// export default function formReducer(state = initialState, action) {
//
//     const { flag, text, number } = action;
//     switch (action.type) {
//         case "SUBMIT":
//             // 今回ここでは状態の更新だけだが、action の値によってさらに別な値も変えたりするなど
//             return Object.assign({}, state, {
//                 text: text,
//                 number: number
//             });
//         case "SHOW":
//             return Object.assign({}, state, {
//                 flag: true
//             });
//         case "HIDE":
//             return Object.assign({}, state, {
//                 flag: false
//             });
//         default:
//             return state;
//     }
// }

const initialState = () => {
    return {
        value: "ddd"
    }
};

//actuonで定義したtypeを元に調整

export default function Reducer(state=initialState, action) {
    switch(action.type){
        case "CHANGE_TEXT":
            return Object.assign({}, state, {
                value: action.payload.text
            });
        default:
            return state;
    }
}