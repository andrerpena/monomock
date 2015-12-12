import React from 'react';

// styles
import bootstrap from 'bootstrap/less/bootstrap.less';
import styles from './client/less/styles.less';

import Router from './Router.js';

if(window) {
    window.React = React;
}

Router.run((Handler) => {
    React.render(<Handler/>, document.getElementById('#app_container'));
});
