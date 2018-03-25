import { connect } from 'react-redux';//react-reduxの機能
import Login from '../components/LoginForm'
import {logout, loginAction, initErr} from "../actions/LoginAction";

function mapStateToProps({token, userName, err, json}) {
    return  {
        token,
        userName,
        err,
        json
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
        }
    };
}


export default connect(mapStateToProps,mapDispatchToProps)(Login);
