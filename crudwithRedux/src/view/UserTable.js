import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DELETE_USER } from '../actions/actionTypes';

class UserTable extends Component {
  
  actionHandle = (param1, param2) => {
    if (param2 === "E") {
      this.props.appScreen.setState({ userId: param1.id })
      this.props.appScreen.setState({ userAction: param2 })
    } else {
      this.props.dispatch({ type: DELETE_USER, data: param1.id })
    }
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.props.users.map((value) =>
            <tr key={value.id}>
              <td>{value.name}</td>
              <td>{value.username}</td>
              <td>
                <button className="button muted-button" onClick={() => this.actionHandle(value, "E")} >Edit</button>
                <button className="button muted-button" onClick={() => this.actionHandle(value, "D")}>Delete</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.UserReducer.users
  };
}

export default connect(mapStateToProps)(UserTable)