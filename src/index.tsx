// Import React and React DOM
import * as React from 'react';
import { render } from 'react-dom';

import Routes from "./pages/routes"

// Import the Hot Module Reloading App Container – more on why we use 'require' below
const { AppContainer } = require('react-hot-loader');

// Import our App container (which we will create in the next step)

// Tell Typescript that there is a global variable called module - see below
declare var module: { hot: any };

// Get the root element from the HTML
const rootEl = document.getElementById('app');

// And render our App into it, inside the HMR App ontainer which handles the hot reloading
render(
    <AppContainer>
        <Routes />
    </AppContainer>,
    rootEl
);

// Handle hot reloading requests from Webpack
if (module.hot) {
    module.hot.accept('./pages/routes', () => {
        // If we receive a HMR request for our App container, then reload it using require (we can't do this dynamically with import)
        const NewRoutes = require<{ default: typeof Routes }>('./pages/routes').default;

        // And render it into the root element again
        render(
            <AppContainer>
                <NewRoutes />
            </AppContainer>,
            rootEl
        );
    })
}