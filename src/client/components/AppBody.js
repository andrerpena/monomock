import React from 'react';
import ComponentsMenu from '../components/ComponentsMenu';
import Surface from '../components/Surface';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import CustomDragLayer from './CustomDragLayer';

var AppBody = React.createClass({

    propTypes: {
        actions: React.PropTypes.object.isRequired,
        mockups: React.PropTypes.array.isRequired
    },

    render: function () {
        return <div className="page-wrap">
            <div className="row row-no-padding">
                <div className="col-md-2">
                    <ComponentsMenu />
                </div>
                <div className="col-md-10">
                    {
                        this.props.mockups.map((m, i) => {
                            return <Surface key={`mockup-${i}`} actions={this.props.actions} mockup={m} />;
                        })
                    }
                </div>
                <CustomDragLayer />
            </div>
        </div>
    }
});

export default DragDropContext(HTML5Backend)(AppBody);