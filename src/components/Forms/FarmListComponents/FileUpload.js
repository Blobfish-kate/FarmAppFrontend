import React from "react"

function FileUpload(props) {
	return (
		<div>
			<label><strong> Add an image to your profile </strong></label>
			<br />
			<input 
				type="file"
				id="farmPic"
				accept={props.accept}
				name={props.name} 
				onChange={props.onChange} />
		</div>
	)
}

export default FileUpload