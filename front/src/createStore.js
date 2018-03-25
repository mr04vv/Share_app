import { createStore as reduxStore,
        combineReducers,
        applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import { routerReducer, routerMiddleware } from 'react-router-redux'

import Reducer from './reducers/User'

export default function createStore(history) {
    return reduxStore(
        combineReducers({
            Reducer,
            router: routerReducer
        }),
        applyMiddleware(
            thunk,
            routerMiddleware(history)
        )
    );
}