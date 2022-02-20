import React,{Component} from 'react'
import {connect} from 'react-redux'
import {ADD_USER} from '../actions/actionTypes';

class AddUserForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  name: null,
			username:null, 
			phonenumber:null
			
		}
	 }

	 handleInputChange = (event) => {
		  let count = this.props.users.length
	    this.props.dispatch({type:ADD_USER,data:{id:count+1,name:this.state.name,username:this.state.username}})
	    this.setState({ name:null, username:null})
		}	

	render(){   
    return (
		<div>
			<label>Name</label>
      <input type="text" name="name" value={this.state.name} onChange={(event)=> this.setState({name: event.target.value})} />
			<label>Username</label>
			<input type="text" name="username" value={this.state.username}  onChange={(event)=> this.setState({username: event.target.value})}/>
			<button onClick={() => this.handleInputChange(this.state)}>Add new user</button>
		</div>
	)
  }
}

const mapStateToProps = (state) => {
	return {
			users:state.UserReducer.users
		};
}


export default connect(mapStateToProps)(AddUserForm)
