import React, { Component } from 'react'
import { connect } from 'react-redux'
import { UPDATE_USER } from '../actions/actionTypes';

class EditUserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      username: '',
      id: null
    }
  }
  componentDidMount() {
    let user = this.props.users.filter(r => r.id === this.props.userId)[0]
    this.setState({ id: user.id, name: user.name, username: user.username })
  }

  handleInputChange = () => {
    this.props.dispatch({ type: UPDATE_USER, data: { id: this.state.id, name: this.state.name, username: this.state.username } })
    this.props.appScreen.setState({ userAction: "A" })
    this.setState({ name: '', username: '' })
  }

  render() {

    return (
      <div>
        <label>Name</label>
        <input type="text" name="name" value={this.state.name} onChange={(event) => this.setState({ name: event.target.value })} />
        <label>Username</label>
        <input type="text" name="username" value={this.state.username} onChange={(event) => this.setState({ username: event.target.value })} />
        <button onClick={() => this.handleInputChange()} className="button muted-button" >Update user </button>
        <button onClick={() => this.handleInputChange()} className="button muted-button">
          Cancel
      </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.UserReducer.users
  };
}


export default connect(mapStateToProps)(EditUserForm)
