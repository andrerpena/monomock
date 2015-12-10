import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as counterActions from '../actions/counter';

var App = React.createClass({

    propTypes: {
        counter: React.PropTypes.object.isRequired,
        actions: React.PropTypes.object.isRequired
    },

    render: function () {
        const counter = this.props.counter;
        const actions = this.props.actions;
        return (
            <div>
                <div>This is the header</div>
                <div>This is the body</div>
            </div>
        );
    }
});

// this means that App will receive a prop called todos that represents the state.todos. state is the app global state
function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(counterActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
