import React from "react"
import styled from "react-emotion"
import image from "../../images/task_logo.png"
import logo from "../../images/logo_transparent.png";
import {Link} from "react-router-dom";


class SPHeader extends React.Component {
  render() {
    return (
      <HeaderWrapper>
        <ImageWrapper src={image}/>
        <HomeLink to={"/"}>
          <LogoWrapper src={logo}/>
        </HomeLink>
        {this.props.isLogin && <LogoutButton>log out</LogoutButton>}
      </HeaderWrapper>

    )
  }
}

const HeaderWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 8px 20px;
  box-sizing: border-box;
  border-bottom: solid 1px #ccc;
  background: orange;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const PCHeaderWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 57px;
  border: solid 1px #eeeeee;
  padding: 8px 26px 8px 16px;
  box-sizing: border-box;
  background: orange;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const HomeLink = styled(Link)`
  height: 100%;
  margin: 0 auto; 
`;

const ImageWrapper = styled("img")`
  height: 100%;
`;

const LogoWrapper = styled("img")`
  height: 30px;
`;

const LogoutButton = styled("button")`
  outline: none;
`;


export default SPHeader