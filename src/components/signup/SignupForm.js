import React, {PureComponent} from 'react'
import './SignupForm.css'
import {Link} from 'react-router-dom'

export default class SignupForm extends PureComponent {
	state = {}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state)
	}

	handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }

	render() {
		return (
      // <div className="signup-form">
  		// 	<form onSubmit={this.handleSubmit}>
  		// 		<label>
      //       Email
      //       <input type="email" name="email" value={
  		// 				this.state.email || ''
  		// 			} onChange={ this.handleChange } />
      //     </label>
  					
  		// 		<label>
      //       Password
  		// 			<input type="password" name="password" value={
  		// 				this.state.password || ''
  		// 			} onChange={ this.handleChange } />
  		// 		</label>

  		// 		<label>
      //       Confirm password
  		// 			<input type="password" name="confirmPassword" value={
  		// 				this.state.confirmPassword || ''
  		// 			} onChange={ this.handleChange } />
  		// 		</label>

  		// 		{
  		// 			this.state.password &&
  		// 			this.state.confirmPassword &&
  		// 			this.state.password !== this.state.confirmPassword &&
  		// 			<p style={{color:'red'}}>The passwords do not match!</p>
  		// 		}

  		// 		<button type="submit">Sign up</button>
  		// 	</form>
      // </div>

<div>
 	<div className="ui attached message">
 		<div className="header">Welcome to our site</div>
 		<p>Fill out the form below to sign-up for a new account</p>
 	</div>
	<form className="ui form attached fluid segment" onSubmit={this.handleSubmit}>
		  <div className="two fields">
				<div className="field">
					<label>First Name</label>
					<input placeholder="First Name" type="text" name="firstName" value={
					this.state.firstName || ''} onChange={ this.handleChange }/>
			 </div>
			<div className="field">
				<label>Last Name</label>
				<input placeholder="Last Name" type="text" name="lastName" value={
				this.state.lastName || ''} onChange={ this.handleChange }/>
			</div>
		</div> 
		<div className="field">
			<label>Email</label>
				<input placeholder="Email" type="email" name="email" value={
				this.state.email || ''} onChange={ this.handleChange } />
		 	</div>
		 <div className="field">
		 	<label>Password</label>
			<input placeholder="Password" type="password" name="password" value={
		 		this.state.password || ''} onChange={ this.handleChange } />
		 </div>
		 <div className="field">
		 	<label>Confirm Password</label>
			<input placeholder="Confirm Password" type="password" name="confirmPassword" value={
  						this.state.confirmPassword || ''
  					} onChange={ this.handleChange } />
		 </div>
		{
  					this.state.password &&
  					this.state.confirmPassword &&
  					this.state.password !== this.state.confirmPassword &&
  					<p style={{color:'red'}}>The passwords do not match!</p>
  	}
		<div className="inline field">
			<div className="ui checkbox">
				<input type="checkbox" id="terms"/>
				<label>I agree to the terms and conditions</label>
			</div>
		</div> 
	<button className="ui primary button">Submit</button>
</form>
<div className="ui bottom attached warning message">
  				Already signed up? <Link to={`/login`}>Login</Link> here instead.
	</div>
 </div>



		)
	}
}
