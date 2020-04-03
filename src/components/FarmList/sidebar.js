import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Sidebar extends React.Component {
	constructor() {
		super()
		this.state = {
			location: "",
			work: "",
			availability: ""
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event){
		const {name, value} = event.target
		this.setState({[name] : value})
	}

	render(){
		return(
					<div class="sidebar">
						<h4>What kind of farm are you looking for?</h4>
						<form>
							<div className="form-group">
								<label>Location</label>
								<select className="form-control"
									value={this.state.location}
									name="location"
									onChange={this.handleChange}
								>
									<option value="">---Select location---</option>
									<option value="North">North</option>
									<option value="South">South</option>
									<option value="East">East</option>
									<option value="West">West</option>
								</select>
							</div>
							<div className="form-group">
								<label>Type of work</label>
								<select className="form-control"
									value={this.state.work}
									name="work"
									onChange={this.handleChange}
								>
									<option value="">---Select work type---</option>
									<option value="Fruit Picking">Fruit picking</option>
									<option value="Manual labour">Manual labour</option>
									<option value="Admin">Admin</option>
								</select>
							</div>
							<div className="form-group">
								<label>Full-time/part-time</label>
								<select className="form-control"
									value={this.state.availability}
									name="availability"
									onChange={this.handleChange}
								>
									<option value="">---Select availability---</option>
									<option value="Full time">Full-time</option>
									<option value="Part time">Part-time</option>
								</select>
							</div>
						</form>
						<div className="selections">
							<span className="badge badge-info">
								{this.state.location}
							</span>
							<span className="badge badge-info">
								{this.state.work}
							</span>
							<span className="badge badge-info">
								{this.state.availability}
							</span>
						</div>
					</div>
		)
	}
}

export default Sidebar