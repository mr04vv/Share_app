import React from "react"
import ReactDOM from 'react-dom'
import Header from './containers/Header'
import Login from "./containers/Login"
import {createStore} from 'redux'
import reducer from "./reducers/User"
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'


const store = createStore(reducer);

ReactDOM.render(
    <div>
        <Header store={store}/>
        <Provider store={store}>
            <Router>
                <Route path={"/login"} component={Login}/>
            </Router>
        </Provider>
    </div>
    ,
    document.getElementById('root')
);
