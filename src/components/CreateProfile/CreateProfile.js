import React from "react"
import { Link } from 'react-router-dom'

function CreateProfile() {

	return (
		<div className="mainContent">
			<h2>Are you a farm looking for farmers, or a farmer looking for farms?</h2>
			<h3>I am a...</h3>
			<Link to="/create-profile/farm">
				<button className="createProfileButton farmButton">Farm</button>
			</Link>
			<Link to="/create-profile/farmer">
				<button className="createProfileButton farmerButton">Farmer</button>
			</Link>
		</div>
	)
}

export default CreateProfile