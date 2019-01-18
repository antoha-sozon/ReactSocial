import React, { Component } from 'react'; 
import { Link } from "react-router-dom";

class PageHeader extends Component { 

	handleOnClick = () => {  
 	 	document.querySelector('#modal').style = 'display: block';
	} 

	handleModalClose = () => {  
 	 	document.querySelector('#modal').style = 'display: none';
	} 

  	render() {
	    return ( 
	    	<div>
				<div className="header">
			 		<div className="container">
			 			<div className="header-logo"> 
			              	<Link to="/"><img src="./i/logo.png" alt="React JS Social"/></Link>
			            </div>
			            <div className="header-search">
							<form action="#">
								<input type="text" name="search" placeholder="search...."/> 
								<button type="submith">search</button>
							</form>
			            </div>
			 			<div className="header-ection">  
			              	<a href="#" onClick={this.handleOnClick}>add post</a>
			              	<a href="#">log out</a>
			            </div>
			 		</div>
			 	</div>
			 	<div className="user-info"> 
		 			<h1>John Dou</h1>
		 			<h3>The best web deweloper</h3>
					<div className="user-block">
						<img src="./i/user.png" alt="user name" /> 
						<Link to="/settings">@JohnDou</Link>
					</div> 
			 	</div>
			 	<div id="modal" className="modal">
					<div class="modal-content">
						<a href="#" className="modal-close" onClick={this.handleModalClose}><i class="fa fa-times" aria-hidden="true"></i></a>
						<div className="modal-form">
							<h3>Add new post</h3>
							<form>
								<textarea placeholder="Send new post..." />
								<button type="submit">Send</button>
							</form>
						</div>
					</div> 
			 	</div>
		 	</div>
	    ); 
  	}
}

export default PageHeader;