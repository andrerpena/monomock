import React from 'react';
import _ from 'underscore';
import async from 'async';

import Header from '../components/Header';

var Router = require('react-router')
    , RouteHandler = Router.RouteHandler
    , Route = Router.Route;

var App = React.createClass({

    render: function() {

        return (
            <div>
                <Header/>
            </div>
        );
    }
});

export default App;