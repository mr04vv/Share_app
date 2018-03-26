import {connect} from "react-redux";
import Header from "../components/Header";
import {logout} from '../actions/LoginAction'
import {homeAction} from "../actions/HomeAction";

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
        },
        homeAction() {
            dispatch(homeAction())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);