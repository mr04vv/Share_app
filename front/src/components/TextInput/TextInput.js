import React from "react"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField';
import {red500} from "material-ui/styles/colors";

const inputStyle = {
  textAlign: "center",
  marginBottom: '30px'
};

const errorStyle = {
  color: red500
};

const TextInput = (props) => {

  /**
   * type = "text"
   * id = "email"
   * label = placeholder
   * error = errorText
   * onChange = function()
   */

  const {type, id, label, error, onChange} = props;
  return (
    <MuiThemeProvider>
    <TextField type={type} id={id} floatingLabelText={label}
               errorText={error} errorStyle={errorStyle}
               onChange={(e) => onChange(e)} hintStyle={inputStyle} style={inputStyle}/>
    </MuiThemeProvider>
  )

};

export default TextInput