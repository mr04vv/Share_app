import React,{Component} from "react"
import {Card,  CardHeader} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {red500, orange500, fullWhite} from 'material-ui/styles/colors';
import { Link } from 'react-router-dom'
import ReactLoading from 'react-loading';

import {Redirect } from 'react-router-dom'


import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const REGISTER_URL = 'http://localhost:4567/users';

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

const registerErrStyle = {
    fontSize: '10px',
    color: red500
};

export default class RegisterForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name : "",
            password : "",
            confirm: "",
            err: '',
            register: false,
            nameErr: '',
            loading: false
        }
    }

    inputName(name) {
        this.initNameErr();
        this.setState ({
            name: name
        });
    }

    inputPassword(pass,confirm) {
        this.initNameErr();
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

    init() {
        this.setState({
            name:'',
            password:'',
            err:'',
            register: false
        })
    };

    componentWillMount() {
        // if (this.props.userName !== "") {
        //     this.setState({
        //         register: true
        //     })
        // }
        if (this.props.token !== "") {
            this.init()
        }

        if (this.props.userName === '') {
            this.props.homeAction()
        }
    }

    register(name,pass) {
        this.props.registerAction(name,pass)
    }

    registerAction(name,pass) {
        this.setState({
            loading: true
        });
        console.log(name);
        console.log(pass);
        fetch(REGISTER_URL, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                password: pass
            }),
        })
            .then((response) => response.json())
            .then(json => {
                if (json.name !== "") {
                    this.setState({
                        register: true,
                        loading: false,
                        name: '',
                        err:'',
                        nameErr: '',
                        password:'',
                        confirm:''
                    })
                }
            })
            .catch(err => {
                this.setState({
                    nameErr: err,
                    loading: false,
                    name:'',
                    password: '',
                    confirm: '',
                    err:'',
                })
            });
    }

    initNameErr() {
        this.setState({
            nameErr: ""
        })
    }


    render() {

        const {loading,token} = this.props;

        if (this.state.loading === true) {
            return (
                <div>
                    <MuiThemeProvider>
                        <div>
                            <Card style={FormStyle}>
                                <CardHeader title={"新規登録画面"} titleStyle={titleStyle}/>
                                <div align="center">
                                    <ReactLoading type={"spinningBubbles"} color={"gray"} height={100} width={100} />
                                </div>
                            </Card>
                        </div>
                    </MuiThemeProvider>
                </div>
            )
        }
        if (this.state.register === false && token === "") {
            return (
                <div>
                    <MuiThemeProvider>
                        <div>
                            <Card style={FormStyle}>
                                <CardHeader title={"新規登録画面"} titleStyle={titleStyle}/>
                                <TextField type={"text"} ref={"em"} id="email" floatingLabelText={"ユーザーネーム"}
                                           errorText={this.state.name ? "" : this.state.err} errorStyle={errorStyle}
                                           onChange={(e) => {
                                               this.inputName(e.target.value);
                                           }} hintStyle={inputStyle} style={inputStyle}/>
                                <br/>
                                <TextField type={"password"} id={"password"} floatingLabelText={"パスワード"}
                                           errorText={this.state.password ? "" : this.state.err} errorStyle={errorStyle}
                                           onChange={(e) => this.inputPassword(e.target.value, this.state.confirm)}
                                           style={inputStyle}/>
                                <br/>
                                <TextField type={"password"} id={"password"} floatingLabelText={"パスワードの確認"}
                                           errorText={
                                               (this.state.password !== this.state.confirm) ? 'パスワードが異なります' : this.state.confirm ? '' : this.state.err
                                           }
                                           errorStyle={errorStyle}
                                           onChange={(e) => this.inputPassword(this.state.password, e.target.value)}
                                           style={inputStyle}/>
                                <br/>
                                <text
                                    style={registerErrStyle}>{ this.state.nameErr ? "そのユーザー名は使用できません" : ""}</text>
                                <br/>
                                <RaisedButton label={"新規登録"} style={buttonStyle} backgroundColor={orange500}
                                              labelColor={fullWhite} onClick={() => {
                                    if (this.state.name && this.state.password && this.state.confirm && (this.state.password === this.state.confirm)) {
                                        return this.registerAction(this.state.name, this.state.password)
                                    } else {
                                        return this.setError()
                                    }
                                }
                                }/>
                                <br/>
                                <text style={registerStyle}>登録がお済みの方は<Link to={{pathname: '/login'}}>ログイン画面</Link>へ
                                </text>
                            </Card>
                            <h1>{this.state.name}</h1>
                            <h2>{this.state.password}</h2>
                        </div>
                    </MuiThemeProvider>
                </div>
            )
        } else if (this.state.register === true){
            return (
                <div>
                    <MuiThemeProvider>
                        <div>
                            <Card style={FormStyle}>
                                <CardHeader title={"ログイン"} titleStyle={titleStyle}/>
                                <h2>登録が完了しました</h2>
                                <br/>
                                <text><Link to={{pathname: '/login'}}>ログイン画面</Link>へ</text>
                            </Card>
                        </div>
                    </MuiThemeProvider>
                </div>
            )
        } else if (token !== "") {
            return (
                <Redirect to={'login'}/>
            )
        }
    }
}