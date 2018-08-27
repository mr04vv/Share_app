import React from "react"
import styled from "react-emotion"
import TextInput from "../../../components/TextInput/TextInput"

const requiredError = "必須項目です";
const passwordNotMatchError = "パスワードが一致しません";
const shortError = "8文字以上のパスワードが使用可能です";

export default class registerForm extends React.Component {

  constructor() {
    super();
    this.state = {
      email: "",
      emailError: "",
      password: "",
      passwordError: "",
      confirmPassword: "",
      confirmPasswordError: "",
      nickName: "",
      nickNameError: ""
    }
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value,
      emailError: ""
    })
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value,
      passwordError: "",
      confirmPasswordError: ""
    })
  }

  handleConfirmPasswordChange(e) {
    this.setState({
      confirmPassword: e.target.value,
      passwordError: "",
      confirmPasswordError: ""
    })
  }

  handleNickNameChange(e) {
    this.setState({
      nickName: e.target.value,
      nickNameError: ""
    })
  }

  register() {

    if (this.setError() === "not match") {
      console.log("error match")
    } else if (this.setError()) {
      console.log("error")
    } else {
      console.log("ok")
    }

  }

  setError() {
    let Error = false;
    const PassError = this.state.passwordError && this.state.confirmPasswordError

    if (this.state.email.length === 0) {
      this.setState({
        emailError: requiredError
      });
      Error = true
    }

    if (this.state.password.length === 0) {
      this.setState({
        passwordError: requiredError
      });
      Error = true
    }

    if (this.state.confirmPassword.length === 0) {
      this.setState({
        confirmPasswordError: requiredError
      });
      Error = true
    }

    if (this.state.nickName.length === 0) {
      this.setState({
        nickNameError: requiredError
      });
      Error = true
    }


    if (!PassError && this.state.password !== this.state.confirmPassword) {
      this.setState({
        confirmPasswordError: passwordNotMatchError,
        passwordError: passwordNotMatchError
      });
      Error = true
    }

    if (!PassError && this.state.password.length > 0 && this.state.password.length < 8) {
      this.setState({
        confirmPasswordError: shortError,
        passwordError: shortError
      });
      Error = true
    }
    return Error
  }

  render() {
    return (
      <RegisterFormWrapper>
        <TextInput onChange={e => this.handleEmailChange(e)} label={"ユーザーID"}
                   error={this.state.emailError}/>
        <TextInput onChange={e => this.handleNickNameChange(e)} label={"ニックネーム"} error={this.state.nickNameError}/>
        <TextInput type={"password"} onChange={e => this.handlePasswordChange(e)} label={"パスワード"}
                   error={this.state.passwordError}/>
        <TextInput type={"password"} onChange={e => this.handleConfirmPasswordChange(e)} label={"パスワードの確認"}
                   error={this.state.confirmPasswordError}/>
        <RegisterButton onClick={() => this.register()}>登録</RegisterButton>
      </RegisterFormWrapper>
    )
  }
}

const RegisterFormWrapper = styled("div")`
  box-shadow: 0 0 8px gray;
  width: 40%;
  padding: 20px;
  margin: 0 auto;
  
`;

const RegisterButton = styled("button")`
  color: white;
  width: 40%;
  height: 30px;
  font-size: 14px;
  display: block;
  margin: 20px auto;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
  background-color: rgb(255, 152, 0);
  border-radius: 2px;
  border: 10px;
  outline: none;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  transition-property: all;
  transition-duration: 450ms;
  transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  transition-delay: 0ms;
  :hover {
    background-color: rgb(255, 152, 0, 0.9);
  }
  :active {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 8px, rgba(0, 0, 0, 0.23) 0px 1px 8px;
    background-color: rgb(255, 152, 0, 0.8);

  }
`;