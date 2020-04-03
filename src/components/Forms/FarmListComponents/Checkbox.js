import React from "react"

function Checkbox(props) {
	return(
		<div className="formCheckbox">
			<label htmlFor={props.name} className="form-label"><strong>{props.title}</strong></label>
			<div className="checkbox-group">
				{props.options.map(option => {
					return (
						<div className="form-check-inline" key={option}>
							<label>
								<input 
									className="form-check-input"
									id={props.name}
									name={props.name}
									onChange={props.handleChange}
									value={option}
									checked={ props.selectedOptions.indexOf(option) > -1 }
									type="checkbox"
								/>
							{option}
							</label>
						</div>
					)
				})}
			</div>
			<br />
		</div>
	)
}

export default Checkbox