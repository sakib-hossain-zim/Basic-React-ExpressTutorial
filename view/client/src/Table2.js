import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';


export default class Table2 extends Component {

  render(){
    return (
    <div className="container" style={{ marginTop: 50 }}>
       <BootstrapTable
       striped
       hover
       keyField='Event_id'
       data={ this.props.data }
       columns={ this.props.columns } />
     </div>

   )
  }

}
