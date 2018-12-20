import React, {PureComponent} from 'react'
import './LoginForm.css'
import {Link} from 'react-router-dom'

export default class LoginForm extends PureComponent {
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
			// <div>
			// 	<div class="ui attached message">
  		// 		<div class="header">Welcome to our site</div>
  		// 		<p>Fill out the form below to sign-up for a new account</p>
			// 	</div>
			// 	<form class="ui form attached fluid segment" onSubmit={this.handleSubmit}>
 					/* <div class="two fields">
    				<div class="field">
							<label>First Name</label>
							<input placeholder="First Name" type="text"/>
   					</div>
    				<div class="field">
							<label>Last Name</label>
							<input placeholder="Last Name" type="text"/>
    				</div>
  				</div> */
					// 	<div class="field">
					// 		<label>Email</label>
					// 		<input placeholder="Email" type="email" name="email" value={
  				// 		this.state.email || ''} onChange={ this.handleChange } />
					// 	</div>
					// <div class="field">
					// 	<label>Password</label>
					// 	<input type="password" name="password" value={
  		 		// 		this.state.password || ''} onChange={ this.handleChange } />
					// </div>
					/* <div class="inline field">
						<div class="ui checkbox">
							<input type="checkbox" id="terms"/>
							<label for="terms">I agree to the terms and conditions</label>
						</div>
				</div> */
  // 			<div class="ui blue submit button">Submit</div>
	// 		</form>

	// </div>




      <div>
				<div className="ui attached message">
  				<div className="header">Welcome to our site</div>
  		 		<p>Please login!</p>
				</div>
  			<form className="ui form attached fluid segment"onSubmit={this.handleSubmit}>
					<div className="field">	
					<label>
            Email
            <input type="email" name="email" value={
  						this.state.email || ''
  					} onChange={ this.handleChange } />
          </label>
					</div>
					<div className="field">
						<label>
							Password
							<input type="password" name="password" value={
								this.state.password || ''
							} onChange={ this.handleChange } />
						</label>

					</div>
					
					<button className="ui primary button">Login</button>
					
					
  				
  			</form>
				<div className="ui bottom attached warning message">
  				Don't have account yet? <Link to={`/signup`}>Signup</Link> here instead.
				</div>
			</div>
			)
	}
}
