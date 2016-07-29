import { applyMiddleware, createStore, ReducersMapObject, compose } from "redux"
import promise from "redux-promise-middleware"
import thunk from "redux-thunk"
import { Map } from "immutable"


import reducers from "./reducers"

export interface IStore extends ReducersMapObject {
    user;
}

interface IWindow extends Window {
    devToolsExtension: any
}

declare var window: IWindow;

const middleware = applyMiddleware(promise(), thunk);


export default createStore(reducers, compose(middleware, window.devToolsExtension && window.devToolsExtension()));