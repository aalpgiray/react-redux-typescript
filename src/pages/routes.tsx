import * as React from "react"
import { Link, Router, Route, browserHistory } from "react-router"
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { Provider } from "react-redux"


import App from "../containers/App"
import { route as homeRoute } from "./home/route"
import { route as aboutRoute } from "./about/route"
import store from ".././store"


export function errorLoading(err: any) {
    console.error('Dynamic page loading failed', err);
}

export function loadRoute(cb: any) {
    return (module: any) => cb(null, module.default);
}

const routes = {
    component: App,
    childRoutes: [
        homeRoute,
        aboutRoute
    ]
}

const history = syncHistoryWithStore(browserHistory, store)

export default class Routes extends React.Component<{}, {}>{
    render() {
        return (
            <Provider store={store}>
                <Router history={history} routes={routes}  key={Math.random()} />
            </Provider>
        )
    }
}

