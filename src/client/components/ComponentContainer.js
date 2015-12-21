import React from 'react';
import ReactDom from 'react-dom';
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

    render: function () {
        let style = {
            position: 'absolute',
            left: this.props.position.x,
            top: this.props.position.y
        };

        if (!componentRegistry[this.props.type]) throw Error('\'componentRegistry[item.type]\' should be truthy');
        let componentType = componentRegistry[this.props.type].component;

        return <div style={style} ref="container">
            <div className="component-container-content">
                { React.createElement(componentType)}
            </div>
            <div className="component-container-handles">
                <div className="component-container-handle north" ref="north-handle"></div>
                <div className="component-container-handle south" ref="south-handle"></div>
                <div className="component-container-handle north-east" ref="north-east-handle"></div>
                <div className="component-container-handle north-west" ref="north-west-handle"></div>
            </div>
        </div>;
    },

    updateHandles: function() {
        let componentWidth = this.refs['container'].offsetWidth;
        let componentHeight = this.refs['container'].offsetHeight;
        let handleOffset = 3.5;

        console.log(componentHeight);
        console.log(componentWidth);

        this.refs['north-handle'].style.top = '-3px';
        this.refs['north-handle'].style.left = (componentWidth / 2 - handleOffset) + 'px';

        this.refs['south-handle'].style.top = ( componentHeight - handleOffset) + 'px';
        this.refs['south-handle'].style.left = (componentWidth / 2 - handleOffset) + 'px';

        this.refs['north-east-handle'].style.top = '-3px';
        this.refs['north-east-handle'].style.left = (componentWidth - handleOffset) + 'px';

        this.refs['north-west-handle'].style.top = '-3px';
        this.refs['north-west-handle'].style.left = '-3px';
    },

    componentDidMount() {
        this.updateHandles();
    }
});

export default ComponentContainer;