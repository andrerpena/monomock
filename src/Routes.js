import React from 'react';

import App from './client/views/App.js';

//paradigms

import {Route, Routes, DefaultRoute, NotFoundRoute} from 'react-router';

export default (
    <Route>
        <Route name='app' path='/' handler={App} />
    </Route>
);
