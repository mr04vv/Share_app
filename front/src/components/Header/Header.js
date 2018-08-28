import React, {Fragment} from "react"
import display from "../../styles/display"
import PCHeader from "./PCHeader"
import SPHeader from "./SPHeader"

class Header extends React.Component {

  render() {
    const isMobile = window.innerWidth <= display.BREAK_POINT_TB;

    return (
      <Fragment>
        {
          isMobile ?
            <SPHeader/> :
            <PCHeader/>
        }
      </Fragment>
    )
  }
}

export default Header