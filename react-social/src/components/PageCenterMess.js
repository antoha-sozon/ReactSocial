import React, { Component } from 'react';   
import { Link } from "react-router-dom";

class PageCenterMess extends Component {
  render() {
    return (  
		<div className="content-center"> 
			<h3>Message</h3>  
			<div className="messenger">
				<div className="messenger-left">
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
				<div className="messenger-right">
					<div className="messenger-chat"> 
						<div className="load-more">
							<Link to="/message"> ... </Link> 
						</div>
						<div className="chat-me">
							<p>My send a messege</p>
						</div>
						<div className="chat-me">
							<p>My send a messege2</p>
						</div>
						<div className="chat-your">
							<p>Your send a messege</p>
						</div>
						<div className="chat-me">
							<p>My send a messege</p>
						</div>
						<div className="chat-your">
							<p>Your send a messege</p>
						</div>
						<div className="chat-your">
							<p>Your send a messege</p>
						</div>
						<div className="chat-me">
							<p>My send a messege</p>
						</div>
						<div className="chat-your">
							<p>Your send a messege</p>
						</div>
						<div className="chat-your">
							<p>Your send a messege</p>
						</div>
						<div className="chat-me">
							<p>My send a messege</p>
						</div>
						<div className="chat-your">
							<p>Your send a messege</p>
						</div>
						<div className="chat-your">
							<p>Your send a messege</p>
						</div>
					</div>
					<div className="send-posts">
						<form>
							<textarea placeholder="Send message..." />
							<button type="submit">Submit</button>
						</form>
					</div>
				</div>
			</div>
		</div> 
    );
  }
}

export default PageCenterMess;