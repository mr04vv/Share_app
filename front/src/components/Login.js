import React,{Component} from "react"
import { connect } from 'react-redux'
import { changeText, submitText, showText, hideText } from "../actions/LoginAction"

export default class Login extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {value} = this.props.store.getState();
        return(
            <div>
            <input type={"text"} ref="test" onChange={(e) => this.props.store.dispatch(changeText(e.target.value))}/>
            <div>{value}</div>
            </div>
        )
    }


    // render() {
    //     // mapStateToProps で紐付けしていることに注意
    //     const { flag, value, number } = this.props;
    //     return (
    //         <div className="main">
    //             <div className={(flag ? "" : "hide")}>
    //                 {value}
    //             </div>
    //             <div>
    //                 <span>{number}</span> 文字
    //             </div>
    //             <h1>ログイン</h1>
    //             <form >
    //                 <input type="text" ref={"inputText"} value={"morio"} onClick={(value) => this.props.oncli(value)} placeholder="userid"/>
    //                 <input placeholder="password"/>
    //                 <div style={{textAlign:"center"}}>
    //                     <button type="submit">ログイン</button>
    //                 </div>
    //             </form>
    //         </div>
    //     )
    // }

}




