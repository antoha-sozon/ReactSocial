import React, { Component } from 'react'; 

class PageCenter extends Component {
  render() {
    return ( 
		<div className="content-center">
			<h3>Posts</h3>
			<div className="send-posts">
				<form>
					<textarea placeholder="Send new post..." />
					<button type="submit">Send</button>
				</form>
			</div>
			<div className="posts">
				<div className="post"> 
					<div className="post-user-img">
						<img src="./i/user.png" alt="user name" />
					</div>
					<div className="post-content"> 
						<h4>John Dou <span>@JohnDou | 17:00</span></h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, maiores aliquam natus, optio laudantium exercitationem. Magnam, hic rerum, esse, tenetur tempore odio animi modi, dolorum beatae assumenda laudantium sed vero.</p>
						<div className="post-controls">
							<a href="#"><i className="fa fa-code" aria-hidden="true"></i></a>
							<a href="#"><i className="fa fa-line-chart" aria-hidden="true"></i></a>
							<a href="#"><i className="fa fa-heart" aria-hidden="true"></i></a>
						</div>
					</div>
				</div>
				<div className="post"> 
					<div className="post-user-img">
						<img src="./i/user.png" alt="user name" />
					</div>
					<div className="post-content"> 
						<h4>John Dou <span>@JohnDou | 17:00</span></h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, maiores aliquam natus, optio laudantium exercitationem. Magnam, hic rerum, esse, tenetur tempore odio animi modi, dolorum beatae assumenda laudantium sed vero.</p>
						<div className="post-controls">
							<a href="#"><i className="fa fa-code" aria-hidden="true"></i></a>
							<a href="#"><i className="fa fa-line-chart" aria-hidden="true"></i></a>
							<a href="#"><i className="fa fa-heart" aria-hidden="true"></i></a>
						</div>
					</div>
				</div>
				<div className="post"> 
					<div className="post-user-img">
						<img src="./i/user.png" alt="user name" />
					</div>
					<div className="post-content"> 
						<h4>John Dou <span>@JohnDou | 17:00</span></h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, maiores aliquam natus, optio laudantium exercitationem. Magnam, hic rerum, esse, tenetur tempore odio animi modi, dolorum beatae assumenda laudantium sed vero.</p>
						<div className="post-controls">
							<a href="#"><i className="fa fa-code" aria-hidden="true"></i></a>
							<a href="#"><i className="fa fa-line-chart" aria-hidden="true"></i></a>
							<a href="#"><i className="fa fa-heart" aria-hidden="true"></i></a>
						</div>
					</div>
				</div>
				<div className="post"> 
					<div className="post-user-img">
						<img src="./i/user.png" alt="user name" />
					</div>
					<div className="post-content"> 
						<h4>John Dou <span>@JohnDou | 17:00</span></h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, maiores aliquam natus, optio laudantium exercitationem. Magnam, hic rerum, esse, tenetur tempore odio animi modi, dolorum beatae assumenda laudantium sed vero.</p>
						<div className="post-controls">
							<a href="#"><i className="fa fa-code" aria-hidden="true"></i></a>
							<a href="#"><i className="fa fa-line-chart" aria-hidden="true"></i></a>
							<a href="#"><i className="fa fa-heart" aria-hidden="true"></i></a>
						</div>
					</div>
				</div>
				<div className="post"> 
					<div className="post-user-img">
						<img src="./i/user.png" alt="user name" />
					</div>
					<div className="post-content"> 
						<h4>John Dou <span>@JohnDou | 17:00</span></h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, maiores aliquam natus, optio laudantium exercitationem. Magnam, hic rerum, esse, tenetur tempore odio animi modi, dolorum beatae assumenda laudantium sed vero.</p>
						<div className="post-controls">
							<a href="#"><i className="fa fa-code" aria-hidden="true"></i></a>
							<a href="#"><i className="fa fa-line-chart" aria-hidden="true"></i></a>
							<a href="#"><i className="fa fa-heart" aria-hidden="true"></i></a>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
  }
}

export default PageCenter;