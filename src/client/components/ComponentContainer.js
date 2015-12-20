import React from 'react';
import componentRegistry from './mockup/componentRegistry';

var ComponentContainer = React.createClass({

    //return <ComponentContainer key={`component-${i}`} position={c.position} type={c.type} props={c.props} />
    propTypes: {
        position: React.PropTypes.shape({
            x: React.PropTypes.number,
            y: React.PropTypes.number
        }).isRequired,
        type: React.PropTypes.string.isRequired,
        props: React.PropTypes.object
    },

    render: function() {
        let style = {
            position: 'absolute',
            left: this.props.position.x,
            top: this.props.position.y
        };

        if (!componentRegistry[this.props.type]) throw Error('\'componentRegistry[item.type]\' should be truthy');
        let componentType = componentRegistry[this.props.type].component;

        return <div style={style} >
            { React.createElement(componentType)}
        </div>;
    }
});

export default ComponentContainer;