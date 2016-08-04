import { Map } from "immutable"
import { Action, Reducer } from "redux"

import {
    GET_USERS_PENDING,
    GET_USERS_FULFILLED,
    SET_USER_NAME
} from ".././actions/user-actions"

export const
    fetching = "fetching",
    name = "name";

const UserDefaults = Map({
    name: "",
    fetching: false
})

export default function reducer(state = UserDefaults, action) {
    switch (action.type) {
        case GET_USERS_PENDING: {
            return state.set(fetching, true);
        }
        case SET_USER_NAME: {
            return state.set(name, action.payload);
        }
        case GET_USERS_FULFILLED: {
            return state
                .set("name", action.payload[0].name)
                .set("fetching", false);
        }
        default:
            return state;
    }
}