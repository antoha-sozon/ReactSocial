import React, { Component } from 'react'; 

class PageRight extends Component {
  render() {
    return ( 
		<div className="content-right">
			<div className="friends">
				<h3>Friends</h3>
				<ul className="friends-ul">
					<li>
						<div className="f-logo">
							<img src="./i/user-logo.png" alt="user name"/>
						</div>
						<div className="f-info">
							<a href="#">Michail Shumaher<span>@misha228</span></a>
						</div> 
					</li>
					<li>
						<div className="f-logo">
							<img src="./i/user-logo.png" alt="user name"/>
						</div>
						<div className="f-info">
							<a href="#">Michail Shumaher<span>@misha228</span></a>
						</div> 
					</li>
					<li>
						<div className="f-logo">
							<img src="./i/user-logo.png" alt="user name"/>
						</div>
						<div className="f-info">
							<a href="#">Michail Shumaher<span>@misha228</span></a>
						</div> 
					</li>
					<li>
						<div className="f-logo">
							<img src="./i/user-logo.png" alt="user name"/>
						</div>
						<div className="f-info">
							<a href="#">Michail Shumaher<span>@misha228</span></a>
						</div> 
					</li>
					<li>
						<div className="f-logo">
							<img src="./i/user-logo.png" alt="user name"/>
						</div>
						<div className="f-info">
							<a href="#">Michail Shumaher<span>@misha228</span></a>
						</div> 
					</li>
				</ul>
			</div>
		</div>
    );
  }
}

export default PageRight;