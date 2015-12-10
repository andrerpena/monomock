import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as counterActions from '../actions/counter';

var App = React.createClass({

    propTypes: {
        counter: React.PropTypes.object.isRequired,
        actions: React.PropTypes.object.isRequired
    },

    handleIncrementClick: function() {
      this.props.actions.increment(1);
    },

    render: function () {

        console.log(this.props);

        const counter = this.props.counter;
        const actions = this.props.actions;
        return (
            <div>
                <div>Counter { counter.counter }</div>
                <button onClick={this.handleIncrementClick}>increment</button>
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
