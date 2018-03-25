import React,{Component} from "react"
import {Card,  CardHeader} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {red500, orange500, fullWhite} from 'material-ui/styles/colors';
import { Link } from 'react-router-dom'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const FormStyle = {
    width: "500px",
    margin: "40px auto",
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

    constructor(props) {
        super(props);
        this.state = {
            name : "",
            password : "",
            confirm: "",
            err: ''
        }
    }

    inputName(name) {
        this.setState ({
            name: name
        });
    }

    inputPassword(pass,confirm) {
        this.setState ({
            password: pass,
            confirm: confirm
        });
    }

    setError() {
        this.setState ({
            err: '必須項目です'
        })
    }

    render() {

        const {registerAction} = this.props;

        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <Card style={FormStyle}>
                            <CardHeader title={"新規登録画面"} titleStyle={titleStyle} />
                            <TextField type={"text"} ref={"em"} id="email" floatingLabelText={"ユーザーネーム"}
                                       errorText={this.state.name ? "" : this.state.err} errorStyle={errorStyle}
                                       onChange={(e) => { this.inputName(e.target.value);}} hintStyle={inputStyle} style={inputStyle}/>
                            <br/>
                            <TextField type={"password"} id={"password"} floatingLabelText={"パスワード"}
                                       errorText={this.state.password ? "" : this.state.err} errorStyle={errorStyle}
                                       onChange={(e) => this.inputPassword(e.target.value,this.state.confirm)} style={inputStyle}/>
                            <br/>
                            <TextField type={"password"} id={"password"} floatingLabelText={"パスワードの確認"}
                                       errorText={
                                           (this.state.password !== this.state.confirm) ? 'パスワードが異なります' : this.state.confirm ? '' : this.state.err
                                       }
                                        errorStyle={errorStyle}
                                       onChange={(e) => this.inputPassword(this.state.password,e.target.value)} style={inputStyle}/>
                            <br/>
                            <RaisedButton label={"新規登録"} style={buttonStyle} backgroundColor={orange500}
                                          labelColor={fullWhite} onClick={() => {
                                                if (this.state.name && this.state.password && this.state.confirm) {
                                                    return registerAction(this.state.name, this.state.password, this.state.confirm)
                                                } else {
                                                    return this.setError()
                                                }
                                            }
                                        }/>
                            <br/>
                            <text style={registerStyle}>登録がお済みの方は<Link to={{pathname:'/login'}} >ログイン画面</Link>へ</text>
                        </Card>
                        <h1>{this.state.name}</h1>
                        <h2>{this.state.password}</h2>
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
}