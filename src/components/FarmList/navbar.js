import React from "react"

function Navbar() {
	return (
		<nav className="navbar fixed-top navbar-expand-md navbar-light bg-light">
				<div className="navbar-header">
					<a className="navbar-brand" href="#">FarmApp</a>
				</div>
				<div className="collapse navbar-collapse" id="navbarCollapse">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<a className="nav-link" href="#">Farm List<span className="sr-only">(current)</span></a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Create profile</a>
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