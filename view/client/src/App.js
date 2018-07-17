import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";
import Table from "./Table";




export default class App extends Component {
  constructor(){
    super();
    this.state = {data: []};
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
      <MuiThemeProvider>
      <div className= "App">

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
          </div>
          </MuiThemeProvider>
          </div>


    );
  }
}
