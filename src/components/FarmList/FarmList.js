import React from "react"
import axios from 'axios'
import Table from 'react-bootstrap/Table'
import Sidebar from './sidebar'
import FarmSummary from './farmSummary'

class FarmList extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			farms: []
		};
	}

	componentDidMount() {
		axios.get('http://localhost:9000')
			.then(res => {
				this.setState({
					farms: res.data
				})
			})
			.catch((error) => {
				console.log(error)
			})
	}

	render() {
		const farmComponents = this.state.farms.map(item => <FarmSummary key={item.id} farm={item} />)
		return (
		<div>
			<div className="d-flex flex-row ">
	          <Sidebar className="col-3"/>
	          <div className="d-flex flex-column align-self-center col-9 farmComponents">
	            {farmComponents}
	          </div>
	        </div>
		</div>
		)
	}
}

export default FarmList