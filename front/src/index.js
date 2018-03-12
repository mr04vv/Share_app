import React from "react"
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Login from "./containers/Login"
import {createStore} from 'redux'
import reducer from "./reducers/User"


const store = createStore(reducer);

ReactDOM.render(
    <div>
    <Header/>
    <Login store = {store} />
    </div>
    ,
    document.getElementById('root')
);
