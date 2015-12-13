import React from 'react';
import Header from '../components/Header';
import AppBody from '../components/AppBody';

var Router = require('react-router')
    , RouteHandler = Router.RouteHandler
    , Route = Router.Route;

var App = React.createClass({

    render: function () {

        return (
            <div className="container-fluid">
                <Header/>
                <AppBody />
            </div>
        );
    }
});

export default App;