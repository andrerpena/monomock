import React from 'react';
import { ItemTypes } from '../Constants';
import { DropTarget } from 'react-dnd';

const componentTarget = {
    drop: function (props, monitor) {
        console.log(arguments);
        //moveKnight(props.x, props.y);
        console.log('drop!');
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