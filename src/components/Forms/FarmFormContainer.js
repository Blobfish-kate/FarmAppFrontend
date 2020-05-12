import React from "react"
import styled from "styled-components"

import TextInput from './FarmListComponents/TextInput'
import Checkbox from './FarmListComponents/Checkbox'
import TextArea from './FarmListComponents/TextArea'
import Button from './FarmListComponents/Button'
import FormTitle from './FarmListComponents/Title'
import FileUpload from './FarmListComponents/FileUpload'

const ShowImage = styled.img`
   	max-width: 100%;
   	max-height: 500px;
   	text-align: center;
   	object-fit: contain;
   	position: relative;
`

function FarmFormContainer(props) {
	return(
		<main className="mainContent">
				<form className="profileForms"
					id="farmProfileForm" 
					onSubmit={props.handleSubmit}>
					<FormTitle text={props.formTitle} />
					<br />
					<TextInput 
						type={'text'}
						name={'farmName'}
						value={props.data.newFarm.farmName}
						placeholder={props.data.newFarm.farmName || 'Farm Name'}
						handleChange={props.handleTextInput}
					/>
					<TextArea 
						type={'text'}
						name={'farmDescription'}
						value={props.data.newFarm.farmDescription}
						placeholder={"Please enter a short description of the farm..."}
						handleChange={props.handleTextInput}
					/>
					<Checkbox 
						name={'farmCrops'}
						title={'Crops'}
						options={props.data.cropOptions}
						handleChange={props.handleCheckbox}
						selectedOptions={props.data.newFarm.farmCrops}
					/>
					<Checkbox 
						name={'farmWorkType'}
						title={'Type of Work'}
						options={props.data.workOptions}
						handleChange={props.handleCheckbox}
						selectedOptions={props.data.newFarm.farmWorkType}
					/>
					<Checkbox 
						name={'farmAvailability'}
						title={'Availability'}
						options={props.data.availabilityOptions}
						handleChange={props.handleCheckbox}
						selectedOptions={props.data.newFarm.farmAvailability}
					/>
					<hr />
					<FileUpload
						text = {props.imageText}
						name={'farmImage'}
						value = {props.data.newFarm.farmImage}
						onChange={(event) => props.handleImage(event)}
						accept=".jpeg, .png, .jpg"
						id={'farmPic'}
					/>
					<hr />
					{ 
						props.data.newFarm.farmImage && 
						<div>
							<p><em>Current profile image:</em></p>
							<ShowImage src={props.image.imageData ? props.image.imageData : props.data.farmImageURL} />
						</div>
					}
					<hr />
					<Button class="btn btn-primary" type="submit" text={props.buttonText}/>
				</form>
			</main>
	)
}

export default FarmFormContainer