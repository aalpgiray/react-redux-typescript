import { Map } from "immutable"
import { Action, Reducer } from "redux"

import { UserActions } from ".././actions/user-actions"

const UserDefaults = Map({
    name: "",
})

export default function reducer(state = UserDefaults, action) {
    switch (action.type) {
        case UserActions.getUsers: {
            return state.set("name", action.payload);
        }
        case UserActions.setUserName: {
            return state.set("name", action.payload);
        }
    }
    return state;

}