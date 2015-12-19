import React from 'react';
import ReactDom from 'react-dom';
import App from './client/views/App';
import configureStore from './client/store/configureStore';
import { Provider } from 'react-redux';

// styles
import styles from './client/less/styles.less';

const store = configureStore();

ReactDom.render ((
    <Provider store={store}>
        <App />
    </Provider>
),  document.getElementById('#app_container'));