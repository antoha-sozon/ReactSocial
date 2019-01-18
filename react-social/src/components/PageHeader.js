import React, { Component } from 'react'; 
import { Link } from "react-router-dom";

class PageHeader extends Component {
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
						<Link to="/">post</Link>
		              	<a href="#" alt="React JS Social">log out</a>
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
	 	</div>
    );
  }
}

export default PageHeader;