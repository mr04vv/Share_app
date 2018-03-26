import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import "typeface-roboto"
import Logout from 'material-ui/svg-icons/action/power-settings-new'
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {fullWhite} from 'material-ui/styles/colors';
import Settings from 'material-ui/svg-icons/action/settings'
import cookie from "react-cookies";
import {homeAction} from "../actions/HomeAction";

const headerStyle = {
    backgroundColor: "#FF9800"
};

const nameStyle = {
    color: 'white',
    verticalAlign: "40%",
    fontSize: '13px'
};

const iconStyle = {
    fontSize: '14px'
};

const GET_ME_URL = 'http://localhost:4567/users/me';

const Logged = (props) => (
    <div>
        <text style={nameStyle}>{props.name}</text>
    <IconMenu
        iconButtonElement={
            <IconButton ><MoreVertIcon color={fullWhite}/></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
        <MenuItem primaryText={"設定"} rightIcon={<Settings></Settings>} style={iconStyle}/>
        <MenuItem primaryText="ログアウト" style={iconStyle} onClick={() => {props.logout(props.token,props.name);}}
                  rightIcon={<Logout></Logout>}/>
    </IconMenu>
    </div>
);


export default class Header extends Component {

    constructor(){
        super();
        this.state= {
            user:'',
            err:''
        }
    }

    render() {
        const {token, userName, logout} = this.props;

        return (
            <div className={"header"}>

                <MuiThemeProvider>
                    <AppBar title={"ShareTask"} showMenuIconButton={false} style={headerStyle}
                            iconElementRight={(token !== "") ? <Logged name={userName} token={token} logout={logout} /> : <div></div>}/>
                </MuiThemeProvider>
            </div>
        )
    }
}