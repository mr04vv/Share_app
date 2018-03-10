import React,{Component} from "react"

export default class Login extends Component {

    constructor(props) {
        super(props);
    }

    handleSubmit() {
        return;
    }

    render() {
        return (
            <div className="main">
                <h1>ログイン</h1>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="userid"/>
                    <input placeholder="password"/>
                    <div style={{textAlign:"center"}}>
                        <button type="submit">ログイン</button>
                    </div>
                </form>
            </div>
        )
    }
}

