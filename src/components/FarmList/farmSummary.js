import React from "react"
import { Link } from "react-router-dom"

function FarmSummary(props) {
	let imageSrc = ""
	if (props.imageSrc) {
		imageSrc = props.imageSrc.imageData
	} else {
		imageSrc = ""
	}
	return(
			<div className="farmSummaryContainer d-flex flex-md-row flex-sm-column">
				<div className="imageBlock col-md-3 row-sm-3">
					<img src={
						imageSrc
					} alt="Farm"/>
				</div>
				<div className="caption col-md-9 row-sm-9">
					<h2 className="title">{props.farm.farmName}</h2>
					<p className="description">{props.farm.farmDescription}</p>
					<p className="crops">
						We grow: {props.farm.farmCrops.map(item => <span key={item}>{item} </span>)} 
					</p>
					<Link to={"/" + props.farm._id}>
						<h4>More</h4>
					</Link>
				</div>
			</div>
	)
}

export default FarmSummary