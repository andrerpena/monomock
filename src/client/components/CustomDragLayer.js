import React, { PropTypes } from 'react';
import { ItemTypes } from '../Constants.js';
import { DragLayer } from 'react-dnd';
import componentRegistry from './mockup/componentRegistry';

const layerStyles = {
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: 100,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%'
};

var CustomDragLayer = React.createClass({

    propTypes: {
        item: PropTypes.object,
        itemType: PropTypes.string,
        currentOffset: PropTypes.shape({
            x: PropTypes.number.isRequired,
            y: PropTypes.number.isRequired
        }),
        isDragging: PropTypes.bool.isRequired
    },

    renderItem(type, item) {
        switch (type) {
            case ItemTypes.COMPONENT:
                if (!item.type) throw Error('\'item.type\' should be truthy');
                if (!componentRegistry[item.type]) throw Error('\'componentRegistry[item.type]\' should be truthy');
                let componentType = componentRegistry[item.type].component;
                return (
                    React.createElement(componentType)
                );
        }
    },

    render() {
        const { item, itemType, isDragging } = this.props;

        if (!isDragging) {
            return null;
        }

        function getItemStyles(props) {
            const { currentOffset, initialOffset, sourceOffset } = props;
            if (!currentOffset) {
                return {
                    display: 'none'
                };
            }

            const x = currentOffset.x + initialOffset.x - sourceOffset.x;
            const y = currentOffset.y + initialOffset.y - sourceOffset.y;

            const transform = `translate(${x}px, ${y}px)`;
            return {
                transform: transform,
                WebkitTransform: transform,
                width: 100
            };
        }

        return (
            <div style={layerStyles}>
                <div style={getItemStyles(this.props)}>
                    {this.renderItem(itemType, item)}
                </div>
            </div>
        );
    }
});


function collect(monitor) {
    return {
        item: monitor.getItem(),
        itemType: monitor.getItemType(),
        currentOffset: monitor.getSourceClientOffset(),
        initialOffset: monitor.getInitialClientOffset(),
        sourceOffset: monitor.getInitialSourceClientOffset(),
        isDragging: monitor.isDragging()
    };
}

export default DragLayer(collect)(CustomDragLayer);