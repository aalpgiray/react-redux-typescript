import * as React from 'react'
import { Link } from "react-router"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { User } from "./components/user"


interface IApp {

}

const activeStyle: React.CSSProperties = {
    textDecoration: "none",
    pointerEvents: "none",
    padding: "0 10px"
}

export default class App extends React.Component<IApp, {}>{
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <ul style={{ display: "flex", listStyle: "none" }}>
                        <li><Link to="/" activeStyle={Object.assign({}, activeStyle, { padding: "0 10px 0 0" })}>Home</Link></li>
                        <li><Link to="/about" activeStyle={activeStyle}>About</Link></li>
                    </ul>
                    <div style={{ position: "absolute", top: 0, right: 0, color: "gainsboro" }} ><User /></div>
                    <div>
                        {this.props.children}
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}