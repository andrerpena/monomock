import React from 'react';
import Header from '../components/Header';
import ComponentsMenu from '../components/ComponentsMenu';
import Surface from '../components/Surface';

var Router = require('react-router')
    , RouteHandler = Router.RouteHandler
    , Route = Router.Route;

var App = React.createClass({

    render: function () {

        return (
            <div className="container-fluid">
                <Header/>
                <div className="page-wrap">
                    <div className="row row-no-padding">
                        <div className="col-md-2">
                            <ComponentsMenu />
                        </div>
                        <div className="col-md-10">
                            <Surface/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default App;