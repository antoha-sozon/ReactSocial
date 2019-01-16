import React, { Component } from 'react'; 

class PageHeader extends Component {
  render() {
    return ( 
    	<div>
			<div className="header">
		 		<div className="container">
		 			<div className="header-logo">
		              	<a href="#"><img src="./i/logo.png" alt="React JS Social"/></a>
		            </div>
		            <div className="header-search">
						<form action="#">
							<input type="text" name="search" placeholder="search...."/> 
							<button type="submith">search</button>
						</form>
		            </div>
		 			<div className="header-ection">
		              	<a href="#" alt="React JS Social">post</a>
		              	<a href="#" alt="React JS Social">log out</a>
		            </div>
		 		</div>
		 	</div>
		 	<div className="user-info"> 
	 			<h1>John Dou</h1>
	 			<h3>The best web deweloper</h3>
				<div className="user-block">
					<img src="./i/user.png" alt="user name" />
					<a href="#">@JohnDou</a>
				</div> 
		 	</div>
	 	</div>
    );
  }
}

export default PageHeader;