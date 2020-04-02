import React from "react"
import { NavLink } from 'react-router-dom'

function Navbar() {
	return (
		<nav className="navbar fixed-top navbar-expand-md navbar-light bg-light">
				<div className="navbar-header">
					<a className="navbar-brand" href="#">FarmApp</a>
				</div>
				<div className="collapse navbar-collapse" id="navbarCollapse">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<NavLink to="/" className="nav-link">Farm List</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/create-profile" className="nav-link">Create profile</NavLink>
						</li>
					</ul>
					<ul className="nav navbar-nav ml-auto">
						<li className="nav-item">
							<a className="nav-link" href="#">Login</a>
						</li>
					</ul>
	  			</div>
  		</nav>
	)
}

export default Navbar