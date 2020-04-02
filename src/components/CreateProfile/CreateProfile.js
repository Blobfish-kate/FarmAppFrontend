import React from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function CreateProfile() {
	return (
		<div className="mainContent">
			<h2>Are you a farm looking for farmers, or a farmer looking for farms?</h2>
			<h3>I am a...</h3>	
			<button className="createProfileButton farmButton">Farm</button>
			<button className="createProfileButton farmerButton">Farmer</button>
		</div>
	)
}

export default CreateProfile