import React, { Component } from "react"
import { Dispatch } from "redux"
import { connect } from "react-redux"
import { Map } from "immutable"

import { getUser, setUserName } from "../.././actions/user-actions"

import * as UserValues from "../.././reducers/user-reducer"

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
export class User extends Component<IUser, {}>{
    shouldComponentUpdate(nextProps: IUser, nextState) {
        return this.props.user != nextProps.user
    }
    componentDidMount() {
        this.props.dispatch(getUser())
    }
    componentWillUnmount() {
        alert('I knew Dan lied about hot reloading.');
    }
    updateUserName() {
        this.props.dispatch(setUserName("Alp !!!"))
    }
    render() {

        let userName;
        if (this.props.user.get(UserValues.fetching)) {
            userName = "..."
        } else {
            userName = this.props.user.get(UserValues.name)
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