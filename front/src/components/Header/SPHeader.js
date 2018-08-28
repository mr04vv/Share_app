import React from "react"
import styled from "react-emotion"
import image from "../../images/task_logo.png"
import logo from "../../images/logo_transparent.png";


class SPHeader extends React.Component {
  render() {
    return (
      <SPHeaderWrapper>
        <ImageWrapper src={image}/>
        <LogoWrapper src={logo}/>
      </SPHeaderWrapper>

    )
  }
}

const SPHeaderWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 100vw;
  height: 48px;
  padding: 8px 20px;
  box-sizing: border-box;
  border-bottom: solid 1px #ccc;
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
  margin: 0 auto; 
`;


export default SPHeader