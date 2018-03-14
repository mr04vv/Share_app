import React,{Component} from "react"
import {Card,  CardHeader} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {red500, orange500, fullWhite} from 'material-ui/styles/colors';
import { Link } from 'react-router-dom'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const FormStyle = {
    width: "500px",
    margin: "70px auto",
    textAlign: "center",
    marginBottom:"20px",
    paddingBottom:'40px'
};

const inputStyle = {
    textAlign: "center",
    marginBottom: '30px'
};

const buttonStyle = {
    marginTop: "25px",
    marginBottom: "30px",
    width: "50%"
};

const titleStyle = {
    marginTop: "25px",
    fontSize: "20px",
    paddingLeft: "80px"
};

const errorStyle = {
    color: red500
};

const registerStyle = {
    fontSize: '8px',
    marginBottom: '10px'
};

export default class RegisterForm extends Component {

    render() {
        const {email, password, inputEmail, inputPassword, register, error, setError, confirmPass} = this.props;

        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <Card style={FormStyle}>
                            <CardHeader title={"新規登録画面"} titleStyle={titleStyle} />
                            <TextField type={"text"} ref={"em"} id="email" floatingLabelText={"ユーザーネーム"}
                                       errorText={email ? "" : error} errorStyle={errorStyle}
                                       onChange={(e) => { inputEmail(e.target.value);}} hintStyle={inputStyle} style={inputStyle}/>
                            <br/>
                            <TextField type={"password"} id={"password"} floatingLabelText={"パスワード"}
                                       errorText={password ? "" : error} errorStyle={errorStyle}
                                       onChange={(e) => inputPassword(e.target.value,confirmPass)} style={inputStyle}/>
                            <br/>
                            <TextField type={"password"} id={"password"} floatingLabelText={"パスワードの確認"}
                                       errorText={
                                           (password !== confirmPass) ? 'パスワードが異なります' : confirmPass ? '' : error
                                       }
                                        errorStyle={errorStyle}
                                       onChange={(e) => inputPassword(password,e.target.value)} style={inputStyle}/>
                            <br/>
                            <RaisedButton label={"新規登録"} style={buttonStyle} backgroundColor={orange500}
                                          labelColor={fullWhite} onClick={() => {
                                                if (email && password && confirmPass) {
                                                    return register(email, password, confirmPass)
                                                } else {
                                                    return setError(error)
                                                }
                                            }
                                        }/>
                            <br/>
                            <text style={registerStyle}>登録がお済みの方は<Link to={{pathname:'/login'}} >ログイン画面</Link>へ</text>
                        </Card>
                        <h1>{email}</h1>
                        <h2>{password}</h2>
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
}