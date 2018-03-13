import {connect} from "react-redux";
import Header from "../components/Header";
import {logout} from '../actions/LoginAction'

function mapStateToProps({email, password, isLogin}) {
    return {
        email,
        password,
        isLogin
    };
}

function mapDispatchToProps(dispatch) {
    return {
        logout(isLogin) {
            dispatch(logout(isLogin))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);