import { applyMiddleware, createStore, ReducersMapObject } from "redux"
import { Map } from "immutable"


import reducers from "./reducers"

export interface IStore extends ReducersMapObject {
    user;
}

interface IWindow extends Window {
    devToolsExtension: any
}

declare var window: IWindow;


export default createStore(reducers, window.devToolsExtension && window.devToolsExtension());