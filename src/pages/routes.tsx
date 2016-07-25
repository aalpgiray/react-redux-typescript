import * as React from "react"
import { Link, Router, Route, browserHistory } from "react-router"

import App from "../containers/App"

function errorLoading(err) {
    console.error('Dynamic page loading failed', err);
}

const routes = {
    component: App,
    childRoutes: [
        {
            path: '/',
            getComponent(location, cb) {
                require.ensure([], function (require) {
                    var a = require<any>("./Home");
                    cb(null, a.default);
                });
            }
        },
        {
            path: '/about',
            getComponent(location, cb) {
                require.ensure([], function (require) {
                    var a = require<any>("./About");
                    cb(null, a.default);
                });
            }
        }
    ]
}

export default class Routes extends React.Component<{}, {}>{
    render() {
        return <Router history={browserHistory} routes={routes} key={Math.random()} />
    }
}