import React from 'react';

var ComponentContainer = React.createClass({
    render: function() {
        let style = {
            position: 'absolute',
            left: this.props.position.x,
            top: this.props.position.y
        };
        return <div style={style} >Fuck it, I'm here!</div>;
    }
});

export default ComponentContainer;