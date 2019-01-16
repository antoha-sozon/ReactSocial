import React, { Component } from 'react'; 

import Footer from './Footer.js';   
 
class Form extends React.Component { 
 	render() {
	  	return ( 
		    <div className="login-content">
				<div className="login-left">
					
				</div>
			    <div className="login-right">
					<form className="login-form" onSubmit={this.handleSubmit}>
						<input type="text" name="login" id="login" value={this.props.login.value}  onChange={this.handleChange} placeholder="Enter name" required />
						<input type="password" name="password" id="password" value={this.props.password.value}  onChange={this.handleChange} placeholder="Enter password" required/>
						<button type="submith">Enter</button>
					</form>
				</div>
			  	<Footer />
		  	</div>
	    ); 
  	}
}
 

export default Form;