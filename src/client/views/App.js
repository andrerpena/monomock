import React from 'react';
import Header from '../components/Header';
import ComponentsMenu from '../components/ComponentsMenu';

var Router = require('react-router')
    , RouteHandler = Router.RouteHandler
    , Route = Router.Route;

var App = React.createClass({

    render: function() {

        return (
            <div>
                <Header/>
                <ComponentsMenu />
            </div>
        );
    }
});

export default App;