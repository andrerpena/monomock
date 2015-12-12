import React from 'react';
import ReactDom from 'react-dom';
import { Router } from 'react-router'
import routes from './Routes';

// styles
import bootstrap from 'bootstrap/less/bootstrap.less';
import styles from './client/less/styles.less';

const createBrowserHistory = require('history/lib/createBrowserHistory');
ReactDom.render ((
    <Router history={createBrowserHistory()}>
        {routes}
    </Router>
),  document.getElementById('#app_container'));