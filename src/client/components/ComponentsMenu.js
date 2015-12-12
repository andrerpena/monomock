import React from 'react';
import VNav from './VNav';

var ComponentsMenu = React.createClass({

    handleItemClick: function (node) {
        console.log(node);
    },

    render: function() {

        var menuData = {
            buttons: {
                display: "Buttons",
                icon: "check-square",
                nodes: {
                    button: {
                        display: "Button",
                    },
                    buttonBar: {
                        display: "Button Bar",
                    },
                    checkbox: {
                        display: "Checkbox",
                    },
                    checkboxGroup: {
                        display: "Checkbox Group",
                    },
                    colorPicker: {
                        display: "Color Picker",
                    },
                    comboBox: {
                        display: "ComboBox"
                    }
                }
            }
        };

        return <VNav nodes={menuData} onItemClick={this.handleItemClick} />;
    }
});

export default ComponentsMenu;