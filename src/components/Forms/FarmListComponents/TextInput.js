import React from "react"

function TextInput(props) {
	return(
		<div className="form-group">
			<input
				className="form-input form-control"
				id={props.name}
				name={props.name}
				type={props.type}
				value={props.value}
				onChange={props.handleChange}
				placeholder={props.placeholder}
			/>
		</div>
	)
}

export default TextInput