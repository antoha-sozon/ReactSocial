import React, { Component } from 'react'; 
import { Router, Route } from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory';  
//PAGES
import PageHeader from './PageHeader.js'; 
import PageLeft from './PageLeft.js'; 
import PageCenter from './PageCenter.js'; 
import PageRight from './PageRight.js'; 
import Footer from './Footer.js';
import PageCenterMusic from './PageCenterMusic.js'; 
import PageCenterGame from './PageCenterGame.js'; 
import PageCenterMess from './PageCenterMess.js'; 
import PageCenterSetting from './PageCenterSetting.js'; 

const history = createBrowserHistory(), 
	Home = () => (
		<div className="page"> 
	 		<PageHeader /> 
		 	<div className="container">
		 		<div className="content">  
				 	<PageLeft />
				 	<PageCenter />
				 	<PageRight />   
				</div>
		 		<div className="page-footer">  
			 		<Footer />
				</div>
		 	</div>
		</div>
	),
	Music = () => (
		<div className="page"> 
	 		<PageHeader /> 
		 	<div className="container">
		 		<div className="content">  
				 	<PageLeft />
			 	 	<PageCenterMusic />
				 	<PageRight />   
				</div>
		 		<div className="page-footer">  
			 		<Footer />
				</div>
		 	</div>
		</div>
	),
	Game = () => (
		<div className="page"> 
	 		<PageHeader /> 
		 	<div className="container">
		 		<div className="content">  
				 	<PageLeft />
			 	 	<PageCenterGame />
				 	<PageRight />   
				</div>
		 		<div className="page-footer">  
			 		<Footer />
				</div>
		 	</div>
		</div>
	) ,
	Messege = () => (
		<div className="page"> 
	 		<PageHeader /> 
		 	<div className="container">
		 		<div className="content">  
				 	<PageLeft />
			 	 	<PageCenterMess /> 
				</div>
		 		<div className="page-footer">  
			 		<Footer />
				</div>
		 	</div>
		</div>
	) ,
	Settings = () => (
		<div className="page"> 
	 		<PageHeader /> 
		 	<div className="container">
		 		<div className="content">  
				 	<PageLeft />
			 	 	<PageCenterSetting /> 
				</div>
		 		<div className="page-footer">  
			 		<Footer />
				</div>
		 	</div>
		</div>
	);

class Navigate extends Component {
  render() {
    return (  
    	<Router history={history}>
			<div> 
				<Route exact path="/" component={Home}/>
				<Route path="/music" component={Music}/> 
				<Route path="/game" component={Game}/> 
				<Route path="/message" component={Messege}/> 
				<Route path="/settings" component={Settings}/> 
			</div> 
		</Router> 
    );
  }
}

export default Navigate;