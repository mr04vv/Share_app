import { connect } from 'react-redux';//react-reduxの機能
// import {} from '../actions/LoginAction';　//ファイル追加②
import Login from '../components/LoginForm'
import {logout, loginAction} from "../actions/LoginAction";

function mapStateToProps({token, userName}) {
    return  {
        token,
        userName
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
