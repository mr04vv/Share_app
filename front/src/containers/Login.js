import { connect } from 'react-redux';//react-reduxの機能
import Login from '../components/LoginForm'
import {logout, loginAction, initErr} from "../actions/LoginAction";
import {homeAction} from "../actions/HomeAction";

function mapStateToProps({token, userName, err, json,logged, loading}) {
    return  {
        token,
        userName,
        err,
        json,
        logged,
        loading
    };
}

function mapDispatchToProps(dispatch) {
    return {
        logout(token) {
            dispatch(logout(token))
        },
        loginAction(name,pass,token) {
            dispatch(loginAction(name,pass,token))
        },
        initErr(err) {
            dispatch(initErr(err))
        },
        homeAction() {
            dispatch(homeAction())
        }
    };
}


export default connect(mapStateToProps,mapDispatchToProps)(Login);
