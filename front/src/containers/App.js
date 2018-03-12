import { bindActionCreators } from 'redux';//reduxの機能
import { connect } from 'react-redux';//react-reduxの機能
import * as Actions from '../actions/LoginAction';　//ファイル追加②
import React,{Component} from "react"
import Result from "../components/InputTask";

export class Login extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        const { value } = this.props;
        return(
            <div>
                <input type={"text"} ref={"test"} id="test" label="test" checked={this.props.checked}  onChange={(e) => { e.preventDefault(); Actions.changeText(e.target.value)}}/>
                <Result result={value}/>
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


const mapState = (state) => ({
    value: state.value,
});

function mapDispatch(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch),
    }
}

export default connect(mapState, mapDispatch)(Login);
