import React from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function Err() {
	return(
		<BrowserRouter>	
			<div className="mainContent">This is the error page</div>
		</BrowserRouter>
	)
}

export default Err