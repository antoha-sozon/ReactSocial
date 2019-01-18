import React, { Component } from 'react';  
import { Link } from "react-router-dom";

class PageCenterSetting extends Component {
  render() {
    return (  
		<div className="content-center"> 
			<h3>Settings</h3>  
			<div className="setting-page">
				<div className="setting-main">
					<div className="setting">
						<div className="setting-name">
							<p>Name</p>
						</div>
						<div className="setting-control">
							<p>You Name: <strong>Vasiliy</strong></p>
						</div>
						<div className="setting-change">
							<Link to="/settings">Change</Link>
						</div> 
					</div>
					<div className="setting">
						<div className="setting-name">
							<p>Password</p>
						</div>
						<div className="setting-control">
							<p>You Password: <strong>Pupkin</strong></p>
						</div>
						<div className="setting-change">
							<Link to="/settings">Change</Link>
						</div> 
					</div> 
					<div className="setting">
						<div className="setting-name">
							<p>E-mail</p>
						</div>
						<div className="setting-control">
							<p>You E-mail: <strong>VasiliyPupkin@gmail.com</strong></p>
						</div>
						<div className="setting-change">
							<Link to="/settings">Change</Link>
						</div> 
					</div> 
					<div className="setting">
						<div className="setting-name">
							<p>Phone</p>
						</div>
						<div className="setting-control">
							<p>You Phone: <strong>+38 (095) 123-45-67</strong></p>
						</div>
						<div className="setting-change">
							<Link to="/settings">Change</Link>
						</div> 
					</div> 
					<div className="load-more">
						<Link to="/settings"> 
							<i className="fa fa-user-times" aria-hidden="true"></i> Delete Your Account!
						</Link> 
					</div>
				</div>
			</div>
		</div> 
    );
  }
}

export default PageCenterSetting;