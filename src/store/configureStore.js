import rootReducer from '../reducers/index';
// Redux utility functions
import { compose, createStore, applyMiddleware } from 'redux';
// Redux DevTools store enhancers
import { devTools, persistState } from 'redux-devtools';
// React components for Redux DevTools
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

const finalCreateStore = compose(
    // Enables your middleware:
    // applyMiddleware(m1, m2, m3), // any Redux middleware, e.g. redux-thunk
    // Provides support for DevTools:
    devTools(),
    // Lets you write ?debug_session=<name> in address bar to persist debug sessions
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

export default function configureStore(initialState) {
    const store = finalCreateStore(rootReducer, initialState);

    // ignore this
    if (module.hot) {
        module.hot.accept('../reducers/index', () => {
            const nextReducer = require('../reducers/index');
            store.replaceReducer(nextReducer)
        })
    }

    return store;
}

