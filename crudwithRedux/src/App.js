import React, { Component } from 'react';
import './App.css';
import UserTable from './view/UserTable'
import AddUserForm from './view/AddUserForm'
import EditUserForm from './view/EditUserForm'
import ReactSvgPieChart from "react-svg-piechart"

//Main branch
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      available: false,
      userId: null,
      userAction: "A",

  data :[
  {title: "PHONE", value: 10, color: "red"},
  {title: "P", value: 60, color: "green"},
  {title: "C", value: 30, color: "#3da18d"},
  {title: "R", value: 20, color: "#69c2b0"},
  {title: "B", value: 10, color: "#a1d9ce"},
  ]

    }
  }
  render() {
  return (
      <div className="container">
        <h1>CRUD With Redux  </h1>
        <div className="flex-row">
          {this.state.userAction === "A" ?
            <div className="flex-large">
              <h2>Add user</h2>
              <AddUserForm />
    
            </div> :
            <div className="flex-large">
              <h2>Add user</h2>
              <EditUserForm userId={this.state.userId} appScreen={this} />
            </div>}
          <div className="flex-large">
            <h2>View users</h2>
     
          <UserTable appScreen={this} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
