import React from "react"
import axios from 'axios'

import Sidebar from './sidebar'
import FarmSummary from './farmSummary'

class FarmList extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			farms: [],
			images: []
		};
	}

	componentDidMount() {
		axios.get('http://localhost:9000')
			.then(res => {
				console.log(res)
				//then for each farm ID, find corresponding image ID
				this.setState({
					farms: res.data.farmData,
					images: res.data.imageData
				})
			})
			.catch((error) => {
				console.log(error)
			})
			//Then get images
	}

	render() {
		//Add .map function to farmcomponents to match correct image to farm
		const farmComponents = this.state.farms.map(item =>
				<FarmSummary key={item._id} farm={item} imageSrc={
					this.state.images.filter(image => image.farmID === item._id)[0]
				}/>
			)
		return (
		<div>
			<h1> Welcome to FarmApp {this.props.user}!</h1>
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