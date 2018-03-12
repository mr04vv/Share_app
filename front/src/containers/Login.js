import { connect } from 'react-redux';//react-reduxの機能
import {inputEmail,inputPassword} from '../actions/LoginAction';　//ファイル追加②
import React from "react"
import Login from '../components/LoginForm'

function mapStateToProps({email, password}) {
    return {
        email,
        password
    };
}

function mapDispatchToProps(dispatch) {
    return {
        inputEmail(email) {
            dispatch(inputEmail(email))
        },
        inputPassword(password) {
            dispatch(inputPassword(password))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
