import React from 'react';
import ReactDom from 'react-dom';
import { Router } from 'react-router'
import routes from './Routes';
import App from './client/views/App';

// styles
import styles from './client/less/styles.less';

const createBrowserHistory = require('history/lib/createBrowserHistory');
ReactDom.render ((
    <App />
    //<Router history={createBrowserHistory()}>
    //    {routes}
    //</Router>
),  document.getElementById('#app_container'));