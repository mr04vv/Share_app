import { connect } from 'react-redux';//react-reduxの機能
import {inputEmail,inputPassword, login, logout} from '../actions/LoginAction';　//ファイル追加②
import Login from '../components/LoginForm'

function mapStateToProps({email, password, isLogin}) {
    return {
        email,
        password,
        isLogin
    };
}

function mapDispatchToProps(dispatch) {
    return {
        inputEmail(email) {
            dispatch(inputEmail(email))
        },
        inputPassword(password) {
            dispatch(inputPassword(password))
        },
        login(isLogin) {
            dispatch(login(isLogin))
        },
        logout(isLogin) {
            dispatch(logout(isLogin))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
