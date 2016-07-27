import * as React from 'react'
import { Link } from "react-router"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { User } from ".././components/user"


interface IApp {

}

export default class App extends React.Component<IApp, {}>{
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
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