import React from 'react';

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