import React, {Fragment} from "react"
import styled from "react-emotion"
import RegisterForm from "./components/RegisterForm"


export default class RegisterHome extends React.Component {

  constructor() {
    super();
    this.state = {
      registerErrorType: 0
    }
  }

  setRegisterErrorType(type) {
    this.setState({
      registerErrorType: type
    })
  }

  render() {
    return (
      <Fragment>
        {this.state.registerErrorType !== 0 && (this.state.registerErrorType === 400 ? <ErrorMessage>{"このユーザー名は使用できません\n他のユーザー名をお試しください"}</ErrorMessage> : <ErrorMessage>{"現在アクセスが集中しています\n時間をおいて再度お試しください"}</ErrorMessage>)}
        <RegisterForm registerErrorType={this.state.registerErrorType} setRegisterErrorType={(type) => this.setRegisterErrorType(type)}/>
      </Fragment>
    )
  }
}

const ErrorMessage = styled("p")`
  color: #d60000;;
  margin-top: 20px;
  background-color: #fdd9d9;
  padding: 15px;
  border-radius: 4px;
  text-align: center;
  white-space: pre-wrap;
`;
