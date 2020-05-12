import React from "react"

function FileUpload(props) {

	return (
		<div>
			<label>
				<strong> {props.text} </strong>
			</label>
			<br />
			<input 
				type="file"
				id={props.id}
				accept={props.accept}
				name={props.name} 
				onChange={props.onChange} 
			/>
		</div>
	)
}

export default FileUpload