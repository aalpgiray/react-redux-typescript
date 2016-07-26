import * as React from "react"
import { Link } from "react-router"
import TextField from "material-ui/TextField"

interface IHome {

}
export default class Home extends React.Component<IHome, {}>{
    render() {
        return (
            <TextField
                hintText="Hint Text"
                floatingLabelText="Floating Label Text"
                />
        )
    }
}

