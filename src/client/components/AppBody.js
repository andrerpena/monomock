import React from 'react';
import ComponentsMenu from '../components/ComponentsMenu';
import Surface from '../components/Surface';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

var AppBody = React.createClass({
   render: function() {
       return <div className="page-wrap">
           <div className="row row-no-padding">
               <div className="col-md-2">
                   <ComponentsMenu />
               </div>
               <div className="col-md-10">
                   <Surface/>
               </div>
           </div>
       </div>
   }
});

export default DragDropContext(HTML5Backend)(AppBody);