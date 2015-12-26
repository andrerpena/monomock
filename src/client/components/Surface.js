import React from 'react';
import ReactDom from 'react-dom';
import { ItemTypes } from '../Constants';
import { DropTarget } from 'react-dnd';
import { ADD_COMPONENT } from '../actions/mockupActions';
import ComponentContainer from './ComponentContainer';
import Popover from 'react-bootstrap/lib/Popover'


const componentTarget = {
    drop: function (props, monitor, component) {

        // console.log(monitor.getInitialSourceClientOffset())

        switch (monitor.getItemType()) {
            case ItemTypes.ADD_COMPONENT:
            {
                // trigger the add component action
                if (!props.actions || !props.actions.addComponent) {
                    throw Error('Surface is not receiving the component actions');
                }

                let clientOffset = monitor.getClientOffset();
                let offsetX = clientOffset.x;
                let offsetY = clientOffset.y;

                let rect = ReactDom.findDOMNode(component).getBoundingClientRect();
                let left = rect.left;
                let top = rect.top;

                let mockupName = props.mockup.name;
                let position = {
                    x: offsetX - left,
                    y: offsetY - top
                };
                let componentType = monitor.getItem().type;

                // trigger the action
                props.actions.addComponent(mockupName, componentType, position);
                break;
            }


            case ItemTypes.EXISTING_COMPONENT:
            {
                // trigger the add component action
                if (!props.actions || !props.actions.addComponent) {
                    throw Error('Surface is not receiving the component actions');
                }

                let clientOffset = monitor.getClientOffset();
                let offsetX = clientOffset.x;
                let offsetY = clientOffset.y;

                let rect = ReactDom.findDOMNode(component).getBoundingClientRect();
                let left = rect.left;
                let top = rect.top;

                let mockupName = props.mockup.name;

                let componentInnerOffset = monitor.getItem().innerOffset;
                let position = {
                    x: offsetX - left - componentInnerOffset.x,
                    y: offsetY - top - componentInnerOffset.y
                };
                let componentId = monitor.getItem().id;

                // trigger the action
                props.actions.moveComponent(mockupName, componentId, position);
                break;
            }
        }

    }
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    };
}

var Surface = React.createClass({

    propTypes: {
        actions: React.PropTypes.object.isRequired,
        mockup: React.PropTypes.object.isRequired
    },

    handleComponentSelection: function (id) {
        this.props.actions.setSelection(this.props.mockup.name, id);
    },

    handleComponentUpdateSize: function(id, size) {
        this.props.actions.updateComponentSize(this.props.mockup.name, id, size);
    },

    handleClick: function () {
        this.props.actions.setSelection(this.props.mockup.name, null);
    },

    render: function () {

        const { connectDropTarget, isDragging, isOver } = this.props;
        return connectDropTarget(
            <div className="surface" onClick={this.handleClick}>
                { this.props.mockup.components.map((c, i) => {
                    return <ComponentContainer
                        key={`component-${i}`}
                        id={c.id}
                        type={c.type}
                        position={c.position}
                        props={c.props}
                        selected={this.props.mockup.selectedComponent == c.id }
                        onSelect={this.handleComponentSelection}
                        onUpdateComponentSize={this.handleComponentUpdateSize}
                    />
                })}

                {
                    !isOver ? <Popover placement="right" positionLeft={0} positionTop={0} arrowOffsetTop={30} animation={false} height={400} >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Popover> : null
                }

            </div>
        );
    }
});

export default DropTarget([ItemTypes.ADD_COMPONENT, ItemTypes.EXISTING_COMPONENT], componentTarget, collect)(Surface);