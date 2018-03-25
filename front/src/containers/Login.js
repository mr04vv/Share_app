import { connect } from 'react-redux';//react-reduxの機能
import Login from '../components/LoginForm'
import {logout, loginAction} from "../actions/LoginAction";

function mapStateToProps({token, userName, err}) {
    return  {
        token,
        userName,
        err
    };
}

function mapDispatchToProps(dispatch) {
    return {
        logout(token) {
            dispatch(logout(token))
        },
        loginAction(name,pass,token) {
            dispatch(loginAction(name,pass,token))
        }
    };
}


export default connect(mapStateToProps,mapDispatchToProps)(Login);
