import React from "react"
import Sidebar from './sidebar'
import FarmSummary from './farmSummary'
import data from "../../data.js"

function FarmList() {
	const farmComponents = data.map(item => <FarmSummary key={item.id} farm={item} />)
	return(
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

export default FarmList