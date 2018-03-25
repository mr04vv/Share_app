import { connect } from 'react-redux';//react-reduxの機能
import { registerAction } from '../actions/RegisterAction'　//ファイル追加②
import Register from '../components/RegisterForm'
import {initErr} from "../actions/LoginAction";

function mapStateToProps({err, userName}) {
    return {
        err,
        userName
    };
}

function mapDispatchToProps(dispatch) {
    return {
        registerAction(name,pass,confirm) {
            dispatch(registerAction(name,pass,confirm))
        },
        initErr(err) {
            dispatch(initErr(err))
        }
     }
}

export default connect(mapStateToProps,mapDispatchToProps)(Register);