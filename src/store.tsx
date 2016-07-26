import { applyMiddleware, createStore, ReducersMapObject } from "redux"
import { Map } from "immutable"

import reducers from "./reducers"

export interface IStore extends ReducersMapObject {
    user;
}

export default createStore(reducers)