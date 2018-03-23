import {connect} from "react-redux";
import Header from "../components/Header";
import {logout} from '../actions/LoginAction'

function mapStateToProps({token, userName}) {
    return {
        token,
        userName
    };
}

function mapDispatchToProps(dispatch) {
    return {
        logout(token) {
            dispatch(logout(token))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);