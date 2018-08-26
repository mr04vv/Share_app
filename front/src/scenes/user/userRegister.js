import React from "react"
import TextInput from "../../components/TextInput/TextInput"
import CommonButton from "../../components/CommonButton/CommonButton"
import Card from "../../components/Card/Card";
export default class userRegister extends React.Component {

  constructor() {
    super();
    this.state = {
      text: ""
    }
  }

  handleTextChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <Card>
        <TextInput id={"email"} onChange={e => this.handleTextChange(e)}/>
        <CommonButton />
        {this.state.text}
      </Card>
    )
  }
}