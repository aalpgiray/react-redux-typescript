import * as React from "react"
import { Link, Router, Route, browserHistory } from "react-router"

import App from "../containers/App"

function errorLoading(err: any) {
    console.error('Dynamic page loading failed', err);
}

function loadRoute(cb: any) {
    return (module: any) => cb(null, module.default);
}

const routes = {
    component: App,
    childRoutes: [
        {
            path: '/',
            getComponent(location, cb) {
                System.import('./home')
                    .then(loadRoute(cb))
                    .catch(errorLoading);
            }
        },
        {
            path: '/about',
            getComponent(location, cb) {
                 System.import('./about')
                    .then(loadRoute(cb))
                    .catch(errorLoading);
            }
        }
    ]
}

export default class Routes extends React.Component<{}, {}>{
    render() {
        return <Router history={browserHistory} routes={routes} key={Math.random()} />
    }
}

