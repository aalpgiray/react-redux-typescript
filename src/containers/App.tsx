import * as React from 'react'
import { Link } from "react-router"

function getPage(t: any, cb: Function) {
    require.ensure([], function (require) {
        var a = require<any>(".././pages/Home");
        cb(null, a.default);
    });
}

interface IApp {

}

export default class App extends React.Component<IApp, {}>{
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}