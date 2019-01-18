import React, { Component } from 'react';  
import { Link } from "react-router-dom";

class PageLeft extends Component {
  render() {
    return (  
		<div className="content-left">
			<div className="menu">
				<h3>Menu</h3> 
				<ul className="menu-ul">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/music">My Music</Link>
					</li>
					<li>
						<Link to="/game">My Game</Link>
					</li>
					<li>
						<Link to="/message">My message</Link>
					</li>
					<li>
						<Link to="/settings">My Settings</Link>
					</li>
				</ul> 
			</div> 			
		</div> 
    );
  }
}

export default PageLeft;