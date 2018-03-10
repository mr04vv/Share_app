import React, {Component} from "react"
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import "typeface-roboto"
import "font-awesome/css/font-awesome.min.css"

const headerStyle = {
    backgroundColor: "orange"
};

export default class App extends Component {

    render() {
        return (
            <div className={"header"}>
                <MuiThemeProvider>
                <AppBar title={"ShareTask"} showMenuIconButton={false} style={headerStyle}/>
                </MuiThemeProvider>
            </div>
        )
    }
}