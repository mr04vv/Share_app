import { connect } from 'react-redux';//react-reduxの機能
import { register } from '../actions/RegisterAction'　//ファイル追加②
import { inputEmail, inputPassword, setError} from "../actions/LoginAction";
import Register from '../components/RegisterForm'

function mapStateToProps({email, password, confirmPass, error}) {
    return {
        email,
        password,
        confirmPass,
        error
    };
}

function mapDispatchToProps(dispatch) {
    return {
        register(email,password) {
            dispatch(register(email,password))
        },
        inputPassword(password,confirmPass) {
            dispatch(inputPassword(password,confirmPass))
        },
        inputEmail(email) {
            dispatch(inputEmail(email))
        },
        setError(error) {
            dispatch(setError(error))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);