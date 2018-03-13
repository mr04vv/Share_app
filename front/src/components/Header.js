import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import "typeface-roboto"
import FontIcon from 'material-ui/FontIcon';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {fullWhite} from 'material-ui/styles/colors';
import Settings from 'material-ui/svg-icons/action/settings'

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
        <MenuItem primaryText="ログアウト" style={iconStyle} onClick={() => props.logout(props.isLogin,props.name)}/>
    </IconMenu>
    </div>
);

export default class Header extends Component {

    render() {
        const {isLogin, email, logout} = this.props;

        return (
            <div className={"header"}>
                <MuiThemeProvider>
                    <AppBar title={"ShareTask"} showMenuIconButton={false} style={headerStyle}
                            iconElementRight={isLogin ? <Logged name={email} isLogin={isLogin} logout={logout} /> : <div></div>}/>
                </MuiThemeProvider>
            </div>
        )
    }
}