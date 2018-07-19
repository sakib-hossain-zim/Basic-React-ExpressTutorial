import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";
import Table from "./Table";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import Table1 from './Table1'





export default class App extends Component {
  constructor(){
    super();
    this.state = {
      data: [],

     columns: [{
      dataField: 'Event_id',
      text: 'Event ID',
    },
    {
      dataField: 'event_name',
      text: 'Event Name'
    }, {
      dataField: 'event_type',
      text: 'Event Type',
      sort: true
    }, {
      dataField: 'description',
      text: 'Description',
      sort: true
    },{
      dataField: 'event_location',
      text: 'Event Location',
      sort: true
    },{
      dataField: 'month_reported_in_table1',
      text: 'Month Reported in Table 1',
      sort: true
    },{
      dataField: 'duration',
      text: 'Duration',
      sort: true
    },{
      dataField: 'event_status',
      text: 'Event Status',
      sort: true
    },{
      dataField: 'travel_group',
      text: 'Travel_Group',
      sort: true

    },{
      dataField: 'p6_uniqueid',
      text: 'P6 Unique Id',
      sort: true
    },{
      dataField: 'weekNo',
      text: 'Week No',
      sort: true
    },{
      dataField: 'meeting_date',
      text: 'Meeting Date',
      sort: true
    },{
      dataField: 'expected_meeting_date',
      text: 'Expected Meeting Date',
      sort: true
    }

  ]

    };
}

  componentDidMount(){
    let self = this;
    fetch('/users/event/view',{
      method:'GET'
    })
      .then(function(response){
        if(response.status >= 400){
          throw new Error("Bad Response from server");
        }
        return response.json();

      }).then(function(data){
        self.setState({data: data.data});
      }).catch(err => {
        console.log('caught it !, err');
      })

  }

     render() {
    return (


      <div>
      <h1 align="center">Create Event</h1>

      <div className= "App">
      <MuiThemeProvider>

      <Form
         onSubmit={submission =>
           this.setState({
             data: [...this.state.data, submission]
           })}
       />

        <Table
          data={this.state.data}
          header={[
            {
              name:"Event_id",
              prop: "Event_id"
            },
            {
              name:"Event_Name",
              prop: "event_name"

            },
            {
              name:"Event_Type",
              prop: "event_type"
            },
            {
              name:"Description",
              prop: "description"
            },
            {
              name:"Event_Location",
              prop: "event_location"
            },
            {
              name:"Month Repoted in Table 1",
              prop: "month_reported_in_table1"
            },

            {
              name:"Duration",
              prop: "duration"
            },

            {
              name:"Event_Status",
              prop: "event_status"
            },

            {
              name:"Travel_Group",
              prop: "travel_group"
            },

            {
              name:"P6_UniqueId",
              prop: "p6_uniqueid"
            },

            {
              name:"Week No",
              prop: "weekNo"
            },

            {
              name:"Meeting Date",
              prop: "meeting_date"
            },

            {
              name:"Expected Meeting Date",
              prop: "expected_meeting_date"
            }


          ]}
          />
          <br />
          <br />
          <br />
          <br />
          </MuiThemeProvider>


          <div className="container" style={{ marginTop: 50}}>
             <BootstrapTable
             hover
             striped
             condensed
             responsive
             keyField='Event_id'
             data={ this.state.data }
             columns={ this.state.columns } />
           </div>

          <div className="container" style={{ marginTop: 50}}>
           <p className="Table-header">Basic Table</p>
          <Table1 data={this.state.data}/>
          </div>

          <br />
          <br />

          </div>
          </div>


    );
  }
}
