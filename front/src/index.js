import React from "react"
import ReactDOM from 'react-dom'
import Header from './containers/Header'
// import Login from "./components/LoginForm"
import Login from './containers/Login'
import Register from './containers/Register'
import {createStore} from 'redux'
import reducer from "./reducers/User"
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'


const store = createStore(reducer);

ReactDOM.render(
    <div>
        <Header store={store}/>
        <Provider store={store}>
            <Router>
                <div>
                    <Route path={'/'} component={() => <Redirect to={'login'}/>}/>

                <Route path={"/login"} component={Login}/>

                <Route path={"/register"} component={Register}/>
                </div>
            </Router>
        </Provider>
    </div>
    ,
    document.getElementById('root')
);
