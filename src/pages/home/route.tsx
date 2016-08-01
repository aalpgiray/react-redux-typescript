import { loadRoute, errorLoading } from ".././routes"

export const route = {
    path: '/',
    getComponent(location, cb) {
        System.import('./index')
            .then(loadRoute(cb))
            .catch(errorLoading);
    }
}