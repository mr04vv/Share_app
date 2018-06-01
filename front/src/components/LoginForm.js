import React,{Component} from "react"
import {Card,  CardHeader} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {red500, orange500, fullWhite} from 'material-ui/styles/colors';
import { Link } from 'react-router-dom'
import cookie from 'react-cookies'

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

const loginErrStyle = {
    fontSize: '10px',
    color: red500
};


export default class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            password: "",
            err: "",
            data: '',
            nameErr:''
        }

    };

    inputName(name) {
        this.props.initErr();
        this.setState ({
            name: name
        });
    }

    inputPassword(pass) {
        this.props.initErr();
        this.setState ({
            password: pass
        });
    }

    setError() {
        this.setState ({
            err: '必須項目です'
        })
    }

    login(name,password) {
        this.props.loginAction(name,password);
    }

    init() {
        this.setState({
            name:'',
            password:'',
            err:''
        })
    };

    componentWillReceiveProps() {

        if (this.props.token !== "") {
            this.init()
        }

        if (this.props.userName === '') {
            this.props.homeAction()
        }
    }

    render() {

        const {token, userName, err, logged} = this.props;

        if (token === "" || !logged ) {
            return (
                <div>
                    <MuiThemeProvider>
                        <div>
                            <Card style={FormStyle}>
                                <CardHeader title={"ログイン"} titleStyle={titleStyle}/>
                                <TextField type={"text"} ref={"em"} id="email" floatingLabelText={"ユーザーネーム"}
                                           errorText={this.state.name ? "" : this.state.err} errorStyle={errorStyle}
                                           onChange={(e) => {
                                               this.inputName(e.target.value);
                                           }} hintStyle={inputStyle} style={inputStyle}/>
                                <br/>
                                <TextField type={"password"} id={"password"} floatingLabelText={"パスワード"}
                                           errorText={this.state.password ? "" : this.state.err}
                                           errorStyle={errorStyle}
                                           onChange={(e) => this.inputPassword(e.target.value)} style={inputStyle}/>
                                <br/>
                                <text style={loginErrStyle}>{((this.state.name || this.state.password) && err) ? "ログインできませんでした" : ""}</text>
                                <br/>
                                <RaisedButton label={"ログイン"} style={buttonStyle} backgroundColor={orange500}
                                              labelColor={fullWhite}
                                              onClick={(this.state.name && this.state.password) ? () => this.login(this.state.name, this.state.password) : () => this.setError()}/>
                                <br/>
                                <text style={registerStyle}>登録がお済みでない方は<Link to={'register'}>新規登録画面</Link>へ</text>
                            </Card>
                            <h1>{this.state.name}</h1>
                            <h2>{this.state.password}</h2>
                        </div>
                    </MuiThemeProvider>
                </div>
            )
        }

        if (token !== "") {

            return (
                <div>
                    <MuiThemeProvider>
                        <div>
                            <Card style={FormStyle}>
                                <CardHeader title={"ログイン"} titleStyle={titleStyle}/>
                                <h2>ようこそ、{userName}さん</h2>
                                <br/>
                            </Card>
                        </div>
                    </MuiThemeProvider>
                </div>
            )
        }
    }

}




