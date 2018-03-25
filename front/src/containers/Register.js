import { connect } from 'react-redux';//react-reduxの機能
import { registerAction } from '../actions/RegisterAction'　//ファイル追加②
import Register from '../components/RegisterForm'


function mapDispatchToProps(dispatch) {
    return {
        registerAction(name,pass,confirm) {
            dispatch(registerAction(name,pass,confirm))
        }
     }
}

export default connect(mapDispatchToProps)(Register);