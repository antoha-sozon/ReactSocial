import React, { Component } from 'react';   
import { Link } from "react-router-dom";

class PageCenterGame extends Component {
  render() {
    return (   
		<div className="content-center"> 
			<h3>Games</h3>  
			<div className="games">
				<div className="game">
					<div className="game-image">
						<i class="fa fa-gamepad" aria-hidden="true"></i>
					</div>
					<div className="game-info">
						<Link to="/game">
							<p>Game Name</p>
							<span>Game Category</span>
						</Link>
					</div>
				</div>
				<div className="game">
					<div className="game-image">
						<i class="fa fa-gamepad" aria-hidden="true"></i>
					</div>
					<div className="game-info">
						<Link to="/game">
							<p>Game Name</p>
							<span>Game Category</span>
						</Link>
					</div>
				</div>
				<div className="game">
					<div className="game-image">
						<i class="fa fa-gamepad" aria-hidden="true"></i>
					</div>
					<div className="game-info">
						<Link to="/game">
							<p>Game Name</p>
							<span>Game Category</span>
						</Link>
					</div>
				</div>
				<div className="game">
					<div className="game-image">
						<i class="fa fa-gamepad" aria-hidden="true"></i>
					</div>
					<div className="game-info">
						<Link to="/game">
							<p>Game Name</p>
							<span>Game Category</span>
						</Link>
					</div>
				</div>
				<div className="game">
					<div className="game-image">
						<i class="fa fa-gamepad" aria-hidden="true"></i>
					</div>
					<div className="game-info">
						<Link to="/game">
							<p>Game Name</p>
							<span>Game Category</span>
						</Link>
					</div>
				</div>
				<div className="game">
					<div className="game-image">
						<i class="fa fa-gamepad" aria-hidden="true"></i>
					</div>
					<div className="game-info">
						<Link to="/game">
							<p>Game Name</p>
							<span>Game Category</span>
						</Link>
					</div>
				</div>
				<div className="game">
					<div className="game-image">
						<i class="fa fa-gamepad" aria-hidden="true"></i>
					</div>
					<div className="game-info">
						<Link to="/game">
							<p>Game Name</p>
							<span>Game Category</span>
						</Link>
					</div>
				</div>
				<div className="game">
					<div className="game-image">
						<i class="fa fa-gamepad" aria-hidden="true"></i>
					</div>
					<div className="game-info">
						<Link to="/game">
							<p>Game Name</p>
							<span>Game Category</span>
						</Link>
					</div>
				</div>
				<div className="game">
					<div className="game-image">
						<i class="fa fa-gamepad" aria-hidden="true"></i>
					</div>
					<div className="game-info">
						<Link to="/game">
							<p>Game Name</p>
							<span>Game Category</span>
						</Link>
					</div>
				</div>
				<div className="game">
					<div className="game-image">
						<i class="fa fa-gamepad" aria-hidden="true"></i>
					</div>
					<div className="game-info">
						<Link to="/game">
							<p>Game Name</p>
							<span>Game Category</span>
						</Link>
					</div>
				</div>
				<div className="game">
					<div className="game-image">
						<i class="fa fa-gamepad" aria-hidden="true"></i>
					</div>
					<div className="game-info">
						<Link to="/game">
							<p>Game Name</p>
							<span>Game Category</span>
						</Link>
					</div>
				</div>
				<div className="game">
					<div className="game-image">
						<i class="fa fa-gamepad" aria-hidden="true"></i>
					</div>
					<div className="game-info">
						<Link to="/game">
							<p>Game Name</p>
							<span>Game Category</span>
						</Link>
					</div>
				</div>
				<div className="load-more">
					<Link to="/game"> 
						<i className="fa fa-th-list" aria-hidden="true"></i> load more...
					</Link> 
				</div>
			</div>
		</div> 
    );
  }
}

export default PageCenterGame;