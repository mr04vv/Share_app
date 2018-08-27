import React from "react"
import styled from "react-emotion"
import {connect} from "react-redux";

import TextInput from "../../../components/TextInput/TextInput"
import {registerAction} from "../../../redux/modules/users/userRegister";

const requiredError = "必須項目です";
const passwordNotMatchError = "パスワードが一致しません";
const shortError = "8文字以上のパスワードが使用可能です";

class RegisterForm extends React.Component {

  constructor() {
    super();
    this.state = {
      userId: "",
      userIdError: "",
      password: "",
      passwordError: "",
      confirmPassword: "",
      confirmPasswordError: "",
      nickName: "",
      nickNameError: "",
      registered: false, // 登録API叩く前かどうか　登録済みかどうかは関係ない
    }
  }

  deleteRegisterError() {
    this.props.registerErrorType &&
      this.props.setRegisterErrorType(0)
  }

  handleEmailChange(e) {
    this.deleteRegisterError();
    this.setState({
      userId: e.target.value,
      userIdError: ""
    })
  }

  handlePasswordChange(e) {
    this.deleteRegisterError();
    this.setState({
      password: e.target.value,
      passwordError: "",
      confirmPasswordError: ""
    })
  }

  handleConfirmPasswordChange(e) {
    this.deleteRegisterError();
    this.setState({
      confirmPassword: e.target.value,
      passwordError: "",
      confirmPasswordError: ""
    })
  }

  handleNickNameChange(e) {
    this.deleteRegisterError();
    this.setState({
      nickName: e.target.value,
      nickNameError: ""
    })
  }

  register() {

    if (!this.setError()) {
      this.props.register(this.state.userId, this.state.password)
        .then(() => {
          console.log("here")
          console.log(this.props.userData)
        })
        .catch((err) => {
          this.props.setRegisterErrorType(err);
        })
    }

  }

  setError() {
    let Error = false;
    const PassError = this.state.passwordError && this.state.confirmPasswordError

    if (this.state.userId.length === 0) {
      this.setState({
        userIdError: requiredError
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
                   error={this.state.userIdError}/>
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

const mapStateToProps = state => ({
  userData: state.userRegister.data
});

const mapDispatchToProps = dispatch => ({
  register: (name, pass) => {
    const data = {
      name: name,
      password: pass
    };
    return dispatch(registerAction(data))
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)

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