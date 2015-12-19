import React from 'react';
import ReactDom from 'react-dom';
import { ItemTypes } from '../Constants';
import { DropTarget } from 'react-dnd';

const componentTarget = {
    drop: function (props, monitor, component) {
        console.log('drop');

        var clientOffset = monitor.getClientOffset();
        let offsetX = clientOffset.x;
        let offsetY = clientOffset.y;

        var rect = ReactDom.findDOMNode(component).getBoundingClientRect();
        let left = rect.left;
        let top = rect.top;

        let delta = {
            x : offsetX - left,
            y: offsetY - top
        };

        console.log(delta);

    }
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    };
}

var Surface = React.createClass({
    render: function () {

        const { connectDropTarget, isOver } = this.props;
        return connectDropTarget(
            <div className="surface">);
            </div>
        );
    }
});

export default DropTarget(ItemTypes.COMPONENT, componentTarget, collect)(Surface);