import React from "react"
import styled from "react-emotion"
import character from "../../images/task_logo.png"
import logo from "../../images/logo_transparent.png"

class PCHeader extends React.Component {
  render() {
    return (
      <PCHeaderWrapper>
        <ImageWrapper src={character}/>
        <LogoWrapper src={logo}/>
      </PCHeaderWrapper>

    )
  }
}

const PCHeaderWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-width: 1200px;
  height: 57px;
  border: solid 1px #eeeeee;
  padding: 8px 26px 8px 16px;
  box-sizing: border-box;
  background: orange;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const ImageWrapper = styled("img")`
  height: 100%;
`;

const LogoWrapper = styled("img")`
  height: 30px;
  margin-right: auto;
  margin-left: 5px;
`;


export default PCHeader