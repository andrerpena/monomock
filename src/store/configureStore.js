import { createStore } from 'redux'
import rootReducer from '../reducers/index';

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState);

    // ignore this
    if (module.hot) {
        module.hot.accept('../reducers/index', () => {
            const nextReducer = require('../reducers/index');
            store.replaceReducer(nextReducer)
        })
    }

    return store;
}

