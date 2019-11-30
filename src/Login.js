import React, { Component } from 'react';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.submit(this.state)
	}

	render() {
		return(
			<form className="Login" onSubmit={this.handleSubmit}>
				<label htmlFor="username">Username:</label>
				<input 
					type="text" 
					placeholder="username" 
					name="username" 
					value={this.state.username}
					onChange={this.handleChange} 
				/>
				<label htmlFor="password">Password:</label>
				<input 
					type="text" 
					placeholder="password" 
					name="password" 
					value={this.state.password}
					onChange={this.handleChange} 
				/>
				<button>Submit</button>
			</form>
		);
	}
}

export default Login;