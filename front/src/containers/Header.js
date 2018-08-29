import {connect} from "react-redux";
import Header from "../old-components/Header";
import {logout} from '../actions/LoginAction'
import {homeAction} from "../actions/HomeAction";

function mapStateToProps({token, userName, logged}) {
    return {
        token,
        userName,
        logged,
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