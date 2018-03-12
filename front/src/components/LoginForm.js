import React,{Component} from "react"
import {Card,  CardHeader} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const FormStyle = {
    width: "500px",
    margin: "150px auto",
    textAlign: "center",
    marginBottom:"20px"
};

const inputStyle = {
    textAlign: "center"
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

export default class LoginForm extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        const { email, password } = this.props;
        return(
            <div>
                <MuiThemeProvider>
                    <Card style={FormStyle}>
                        <CardHeader title={"ログイン"} titleStyle={titleStyle} style={headerStyle}/>
                        <TextField type={"text"}  id="email" floatingLabelText={"ユーザーネーム"} onChange={(e) => this.props.inputEmail(e.target.value)} hintStyle={inputStyle} />
                        <br/>
                        <TextField type={"password"} id={"password"} floatingLabelText={"パスワード"} onChange={(e) => this.props.inputPassword(e.target.value)} style={inputStyle}/>
                        <br/>
                        <RaisedButton label={"ログイン"} style={buttonStyle} backgroundColor={"orange"} labelColor={"white"}/>
                    </Card>
                    <h1>{email}</h1>
                    <h2>{password}</h2>
                </MuiThemeProvider>

            </div>
        )
    }

}




