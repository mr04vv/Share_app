import React, {Fragment} from "react"
import styled from "react-emotion"
import RegisterForm from "./components/RegisterForm"
import Header from "../../components/Header/Header";
import display from "../../styles/display"


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
    const isMobile = window.innerWidth <= display.BREAK_POINT_TB;

    return (
      <Fragment>
        <Header/>
        {!isMobile && this.state.registerErrorType !== 0 && (this.state.registerErrorType === 400 ? <ErrorMessage>{"このユーザー名は使用できません\n他のユーザー名をお試しください"}</ErrorMessage> : <ErrorMessage>{"現在アクセスが集中しています\n時間をおいて再度お試しください"}</ErrorMessage>)}
        <RegisterForm registerErrorType={this.state.registerErrorType} setRegisterErrorType={(type) => this.setRegisterErrorType(type)}/>
        {isMobile && this.state.registerErrorType !== 0 && (this.state.registerErrorType === 400 ? <ErrorMessage>{"このユーザー名は使用できません\n他のユーザー名をお試しください"}</ErrorMessage> : <ErrorMessage>{"現在アクセスが集中しています\n時間をおいて再度お試しください"}</ErrorMessage>)}
      </Fragment>
    )
  }
}

const ErrorMessage = styled("p")`
  @media screen and (min-width: ${display.BREAK_POINT_SP}px) {
    color: #d60000;
    background-color: #fdd9d9;
    padding: 15px;
    border-radius: 4px;
    text-align: center;
    white-space: pre-wrap;
    width: -webkit-fill-available;
    position: absolute;
  }
  @media screen and (max-width: ${display.BREAK_POINT_SP}px) {
    color: #d60000;
    position: absolute;
    font-size: 12px;
    white-space: pre-wrap;
    left: 25%;
  }
`;
