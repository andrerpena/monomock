import React from 'react';
import ReactDom from 'react-dom';
import { Router } from 'react-router'
import routes from './Routes';
import App from './client/views/App';
import configureStore from './client/store/configureStore';
import { Provider } from 'react-redux';

// styles
import styles from './client/less/styles.less';

const store = configureStore();

const createBrowserHistory = require('history/lib/createBrowserHistory');
ReactDom.render ((
    <Provider store={store}>
        <App />
    </Provider>
    //<Router history={createBrowserHistory()}>
    //    {routes}
    //</Router>
),  document.getElementById('#app_container'));