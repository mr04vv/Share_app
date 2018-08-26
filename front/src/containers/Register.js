import { connect } from 'react-redux';//react-reduxの機能
import { registerAction } from '../actions/RegisterAction'　//ファイル追加②
import Register from '../old-components/RegisterForm'
import {initErr} from "../actions/LoginAction";
import {homeAction} from "../actions/HomeAction";

function mapStateToProps({err, userName, token, loading}) {
    return {
        err,
        userName,
        token,
        loading
    };
}

function mapDispatchToProps(dispatch) {
    return {
        registerAction(name,pass,confirm) {
            dispatch(registerAction(name,pass,confirm))
        },
        initErr(err) {
            dispatch(initErr(err))
        },
        homeAction() {
            dispatch(homeAction())
        }
     }
}

export default connect(mapStateToProps,mapDispatchToProps)(Register);