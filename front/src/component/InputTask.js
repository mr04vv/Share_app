import React, {Component} from "react"

export default class InputTask extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <input type={"text"} id={"task"} placeholder={"タスク名を入力してください"}/>
            </div>
        )
    }
}