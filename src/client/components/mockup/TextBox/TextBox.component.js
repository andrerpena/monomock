import React from 'react';
import BootstrapInput from 'react-bootstrap/lib/Input';

var TextBox = React.createClass({
    render: function () {
        return <BootstrapInput type="text" value="TextBox" onChange={ e=> {} }/>
    }
});

export default TextBox;