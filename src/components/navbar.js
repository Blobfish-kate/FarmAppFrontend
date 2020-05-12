import React from "react"

import { NavLink } from 'react-router-dom'

import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

function Navigation() {
	return (
		<Navbar>
				<Navbar.Brand>
					<NavLink to="/" className="navbar-brand">FarmApp</NavLink>
				</Navbar.Brand>
				<Nav className="collapse navbar-collapse">
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
							<a className="nav-link" href="/login">Login</a>
						</li>
					</ul>
	  			</Nav>
  		</Navbar>
	)
}

export default Navigation