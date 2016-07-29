import * as React from "react"
import { Dispatch } from "redux"
import { connect } from "react-redux"
import { Map } from "immutable"

import { getUser, setUserName } from "../.././actions/user-actions"

interface IUser {
    user?: Map<string, string>,
    dispatch?: Dispatch<any>
}

@connect(store => {
    let props: IUser = {
        user: store.user
    }
    return props
})
export class User extends React.Component<IUser, {}>{
    shouldComponentUpdate(nextProps: IUser, nextState) {
        return this.props.user != nextProps.user
    }
    async componentWillMount() {
        this.props.dispatch(await getUser())
    }
    updateUserName() {
        this.props.dispatch(setUserName("Alp !!!"))
    }
    render() {

        let userName;
        if (this.props.user.get("fetching")) {
            userName = "..."
        } else {
            userName = this.props.user.get("name")
        }

        return (
            <div style={{ display: "flex" }}>
                <div style={{ color: "darkgray", marginRight: 10 }}>
                    {userName}
                </div>
                <a style={{ cursor: "pointer", textDecoration: "underline", color: "lightgrey" }} onClick={() => { this.updateUserName() } }>Çıkış</a>
            </div>
        )
    }
}