import React from "react"
import ReactDOM from 'react-dom'
import InputTask from "./components/InputTask"
import App from "./containers/App"
import Login from "./components/Login"

ReactDOM.render(
    <div>
        <App/>
        <Login/>
    </div>,
    document.getElementById('root')
);
