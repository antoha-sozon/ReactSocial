import React, { Component } from 'react';   
import { Link } from "react-router-dom";

class PageCenterMusic extends Component {
  render() {
    return (  
		<div className="content-center"> 
			<h3>Music</h3>  
			<div className="playlist">
				<div className="track">
					<div className="track-icon">
						<Link to="/music"> 
							<i className="fa fa-play-circle" aria-hidden="true"></i>
						</Link> 
					</div>
					<div className="track-info">
						<p>Track Name</p>
						<span>Artist Name</span>
					</div>
					<div className="track-duration">
						<p>3:45</p>
					</div>
				</div>
				<div className="track">
					<div className="track-icon">
						<Link to="/music"> 
							<i className="fa fa-play-circle" aria-hidden="true"></i>
						</Link> 
					</div>
					<div className="track-info">
						<p>Track Name</p>
						<span>Artist Name</span>
					</div>
					<div className="track-duration">
						<p>3:45</p>
					</div>
				</div>
				<div className="track">
					<div className="track-icon">
						<Link to="/music"> 
							<i className="fa fa-play-circle" aria-hidden="true"></i>
						</Link> 
					</div>
					<div className="track-info">
						<p>Track Name</p>
						<span>Artist Name</span>
					</div>
					<div className="track-duration">
						<p>3:45</p>
					</div>
				</div>
				<div className="track">
					<div className="track-icon">
						<Link to="/music"> 
							<i className="fa fa-play-circle" aria-hidden="true"></i>
						</Link> 
					</div>
					<div className="track-info">
						<p>Track Name</p>
						<span>Artist Name</span>
					</div>
					<div className="track-duration">
						<p>3:45</p>
					</div>
				</div>
				<div className="track">
					<div className="track-icon">
						<Link to="/music"> 
							<i className="fa fa-play-circle" aria-hidden="true"></i>
						</Link> 
					</div>
					<div className="track-info">
						<p>Track Name</p>
						<span>Artist Name</span>
					</div>
					<div className="track-duration">
						<p>3:45</p>
					</div>
				</div>
				<div className="track">
					<div className="track-icon">
						<Link to="/music"> 
							<i className="fa fa-play-circle" aria-hidden="true"></i>
						</Link> 
					</div>
					<div className="track-info">
						<p>Track Name</p>
						<span>Artist Name</span>
					</div>
					<div className="track-duration">
						<p>3:45</p>
					</div>
				</div>
				<div className="track">
					<div className="track-icon">
						<Link to="/music"> 
							<i className="fa fa-play-circle" aria-hidden="true"></i>
						</Link> 
					</div>
					<div className="track-info">
						<p>Track Name</p>
						<span>Artist Name</span>
					</div>
					<div className="track-duration">
						<p>3:45</p>
					</div>
				</div>
				<div className="track">
					<div className="track-icon">
						<Link to="/music"> 
							<i className="fa fa-play-circle" aria-hidden="true"></i>
						</Link> 
					</div>
					<div className="track-info">
						<p>Track Name</p>
						<span>Artist Name</span>
					</div>
					<div className="track-duration">
						<p>3:45</p>
					</div>
				</div>
				<div className="track">
					<div className="track-icon">
						<Link to="/music"> 
							<i className="fa fa-play-circle" aria-hidden="true"></i>
						</Link> 
					</div>
					<div className="track-info">
						<p>Track Name</p>
						<span>Artist Name</span>
					</div>
					<div className="track-duration">
						<p>3:45</p>
					</div>
				</div>
				<div className="track">
					<div className="track-icon">
						<Link to="/music"> 
							<i className="fa fa-play-circle" aria-hidden="true"></i>
						</Link> 
					</div>
					<div className="track-info">
						<p>Track Name</p>
						<span>Artist Name</span>
					</div>
					<div className="track-duration">
						<p>3:45</p>
					</div>
				</div>
				<div className="load-more">
					<Link to="/music"> 
						<i className="fa fa-th-list" aria-hidden="true"></i> load more...
					</Link> 
				</div>
			</div>
		</div> 
    );
  }
}

export default PageCenterMusic;