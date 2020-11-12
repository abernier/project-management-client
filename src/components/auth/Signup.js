import React, { Component } from 'react';
import {signup} from './auth-service'
import { Link } from 'react-router-dom'; // HERE

class Signup extends Component {

  state = { username: '', password: '' }

  // HERE
  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    signup(username, password)
      .then(response => {
        this.setState({username: "", password: ""});
        this.props.updateUser(response)
      })
      .catch( error => console.log(error) )
  }

  // HERE
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  // handleChange() and handleSubmit() will be added here

  render() {
    return (
      <div>
        {/* HERE */}
        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
          
          <label>Password:</label>
          <input name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
          
          <button>I Signup</button>
        </form>
  
        <p>Already have account? 
          <Link to={"/"}>Login</Link>
        </p>
  
      </div>
    )
  }
}

export default Signup;