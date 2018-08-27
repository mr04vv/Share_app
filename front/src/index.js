import React from "react"
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import { CookiesProvider } from "react-cookie";

import Login from './containers/Login'
import Register from './containers/Register'
import configureStore from "./redux/";

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import moment from "moment";
import TextInput from "./components/TextInput/TextInput"
// 背景：0.1MB サイズぐらい重かった為
// momentの全てのlocaleをbuiltに含まれないように webpack.configでlocaleのjsをignoreし、
// 必要とするja.js のみをインポートします。
import "moment/locale/ja.js";
import RegisterHome from "./scenes/user/RegisterHome"
moment.locale("ja");
const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>

        <Route path={"/login"} component={Login}/>

        <Route path={"/register"} component={RegisterHome}/>
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(
  <CookiesProvider>
    <App/>
  </CookiesProvider>,
  document.getElementById('root')
);
