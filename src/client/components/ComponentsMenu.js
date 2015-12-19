import React from 'react';
import VNav from './VNav';

var ComponentsMenu = React.createClass({

    handleItemClick: function (node) {
        console.log(node);
    },

    render: function() {

        var menuData = {
            buttons: {
                display: 'Buttons',
                icon: 'check-square',
                nodes: {
                    button: {
                        type: 'Button',
                        display: 'Button'
                    }
                }
            }
        };

        return <VNav nodes={menuData} onItemClick={this.handleItemClick} />;
    }
});

export default ComponentsMenu;