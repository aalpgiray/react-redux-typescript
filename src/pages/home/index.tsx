import * as React from "react"
import { Link } from "react-router"

interface IHome { // yusuf sen neden bahsediyorsun ... 
    params?: any
}

export default class Home extends React.Component<IHome, {}>{
    shouldComponentUpdate() {
        return false;
    }
    render() {
        return (
            <h1>Home Page</h1>
        )
    }
}

