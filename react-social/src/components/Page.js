import React, { Component } from 'react'; 

import PageHeader from './PageHeader.js'; 
import PageLeft from './PageLeft.js'; 
import PageCenter from './PageCenter.js'; 
import PageRight from './PageRight.js'; 

class Page extends Component {
  render() {
    return ( 
    	<div className="page"> 
	 		<PageHeader /> 
		 	<div className="container">
		 		<div className="content"> 
				 	<PageLeft />
				 	<PageCenter />
				 	<PageRight />   
				</div>
		 	</div>
		</div>
    );
  }
}

export default Page;