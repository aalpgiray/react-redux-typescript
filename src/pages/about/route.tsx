import { loadRoute, errorLoading } from ".././routes"

export const route = {
    path: '/about',
    getComponent(location, cb) {
        System.import('./index')
            .then(loadRoute(cb))
            .catch(errorLoading);
    }
}