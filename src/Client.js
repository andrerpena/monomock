import React from 'react';

// styles
import styles from './client/less/styles.less';

import Router from './Router.js';

// favicon
import favicon from '../assets/favicon.ico';

if(window) {
    window.React = React;
}

Router.run((Handler) => {
    React.render(<Handler/>, document.getElementById('#app_container'));
});
