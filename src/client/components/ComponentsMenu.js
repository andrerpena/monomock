import React from 'react';
import VNav from './VNav';

var ComponentsMenu = React.createClass({

    handleItemClick: function (node) {
        console.log(node);
    },

    render: function() {

        var menuData = {
            contacts: {
                display: "Contacts",
                icon: "user",
                nodes: {
                    newContact: {
                        display: "New contact",
                        icon: "user-plus"
                    },
                    search: {
                        display: "Search contacts",
                        icon: "search"
                    }
                }
            }
        };

        return <VNav nodes={menuData} onItemClick={this.handleItemClick} />;
    }
});

export default ComponentsMenu;