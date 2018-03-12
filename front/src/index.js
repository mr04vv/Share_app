import React from "react"
import ReactDOM from 'react-dom'
import InputTask from "./components/InputTask"
import App from "./containers/App"
import Header from './components/Header'
import Login from "./components/Login"
import { Provider, connect } from 'react-redux';
import LoginAction from './actions/LoginAction'
import User from './reducers/User'
import {bindActionCreators} from "redux";
import {createStore} from 'redux';
import reducer from "./reducers/User";

// connect(
//     state => ({value: state.formReducer}),
//     dispatch => bindActionCreators(LoginAction, dispatch)
// );

const store = createStore(reducer);

ReactDOM.render(
    <div>
    <Header/>
    <Login store = {store} />
    </div>
    ,
    document.getElementById('root')
);
