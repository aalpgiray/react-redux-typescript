import * as React from "react"

interface IAbout {

}

export default class About extends React.Component<IAbout, {}>{
    shouldComponentUpdate() {
        return false;
    }
    render() {
        return <h1>About Page !!!</h1>
    }
}