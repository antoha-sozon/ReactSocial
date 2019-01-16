import React, { Component } from 'react'; 

class PageLeft extends Component {
  render() {
    return ( 
		<div className="content-left">
			<div className="menu">
				<h3>Menu</h3>
				<ul className="menu-ul">
					<li><a href="/">Home</a></li>
					<li><a href="#">My Music</a></li>
					<li><a href="#">My Game</a></li>
					<li><a href="#">My message</a></li>
					<li><a href="#">My Settings</a></li> 
				</ul>
			</div> 			
		</div> 
    );
  }
}

export default PageLeft;