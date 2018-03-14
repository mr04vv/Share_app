import { connect } from 'react-redux';//react-reduxの機能
import {inputEmail,inputPassword, login, logout, setError} from '../actions/LoginAction';　//ファイル追加②
import Login from '../components/LoginForm'

function mapStateToProps({email, password, isLogin, error}) {
    return {
        email,
        password,
        isLogin,
        error
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
        login(isLogin,email,password) {
            dispatch(login(isLogin,email,password))
        },
        logout(isLogin) {
            dispatch(logout(isLogin))
        },
        setError(error) {
            dispatch(setError(error))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
