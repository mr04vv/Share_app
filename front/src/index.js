import React from "react"
import ReactDOM from 'react-dom'
import Header from './containers/Header'
import Login from './containers/Login'
import Register from './containers/Register'
import {createStore, applyMiddleware} from 'redux'
import reducer from "./reducers/User"
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'


const store = createStore(
    reducer,
    applyMiddleware(
        thunkMiddleware
    )
);

ReactDOM.render(
    <div>
        <Header store={store}/>
        <Provider store={store}>
            <Router>
                <div>
                <Route exact path='/' component={() => <Redirect to={'register'}/>}/>

                <Route path={"/login"} component={Login}/>

                <Route path={"/register"} component={Register}/>
                </div>
            </Router>
        </Provider>
    </div>
    ,
    document.getElementById('root')
);
