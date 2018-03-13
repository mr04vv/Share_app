import React,{Component} from "react"
import {Card,  CardHeader} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {red500, orange500, fullWhite} from 'material-ui/styles/colors';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const FormStyle = {
    width: "500px",
    margin: "120px auto",
    textAlign: "center",
    marginBottom:"20px"
};

const inputStyle = {
    textAlign: "center",
    marginBottom: '30px'
};

const buttonStyle = {
    marginTop: "50px",
    marginBottom: "60px",
    width: "50%"
};


const titleStyle = {
    marginTop: "50px",
    fontSize: "20px",
    paddingLeft: "80px",
};

const headerStyle = {
  paddingRight: "0px"
};

const errorStyle = {
  color: red500
};

let error = '';

const changeError = () => {
    error = 'mkm';
};

export default class LoginForm extends Component {

    render() {
        const { email, password, isLogin, inputEmail, inputPassword, login, error, setError} = this.props;

        if (!isLogin) {
            return (
                <div>
                    <MuiThemeProvider>
                        <div>
                            <Card style={FormStyle}>
                                <CardHeader title={"ログイン"} titleStyle={titleStyle} style={headerStyle}/>
                                <TextField type={"text"} ref={"em"} id="email" floatingLabelText={"ユーザーネーム"}
                                           errorText={email ? "" : error} errorStyle={errorStyle}
                                           onChange={(e) => { inputEmail(e.target.value);}} hintStyle={inputStyle} style={inputStyle}/>
                                <br/>
                                <TextField type={"password"} id={"password"} floatingLabelText={"パスワード"}
                                           errorText={password ? "" : error} errorStyle={errorStyle}
                                           onChange={(e) => inputPassword(e.target.value)} style={inputStyle}/>
                                <br/>
                                <RaisedButton label={"ログイン"} style={buttonStyle} backgroundColor={orange500}
                                              labelColor={fullWhite} onClick={(email && password) ? () => login(isLogin) : () => setError(error)}/>
                            </Card>
                            <h1>{email}</h1>
                            <h2>{password}</h2>
                        </div>
                    </MuiThemeProvider>
                </div>
            )
        }

        if (isLogin) {
            return (
                <div>
                    <MuiThemeProvider>
                        <div>
                            <Card style={FormStyle}>
                                <CardHeader title={"ログイン"} titleStyle={titleStyle} style={headerStyle}/>
                                <h2>ようこそ、{email}さん</h2>
                                <br/>
                            </Card>
                        </div>
                    </MuiThemeProvider>
                </div>
            )
        }
    }

}




