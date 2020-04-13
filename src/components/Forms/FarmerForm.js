import React from "react"
import TextInput from './FarmListComponents/TextInput'
import Checkbox from './FarmListComponents/Checkbox'
import TextArea from './FarmListComponents/TextArea'
import Button from './FarmListComponents/Button'
import FormTitle from './FarmListComponents/Title'
import FileUpload from './FarmListComponents/FileUpload'


class FarmerForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			newPerson: {
				firstName: "", 
				lastName: "", 
				personAddress: {},
				personDescription: "",
				personAvailability: [],
				personImage: ""
			},
			availabilityOptions: ["Full-time", "Part-time (weekdays)", "Part-time (weekends)"]
		}
		this.handleTextInput = this.handleTextInput.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleCheckbox = this.handleCheckbox.bind(this)
		this.handleImage = this.handleImage.bind(this)
		this.handleAddressChange = this.handleAddressChange.bind(this)
	}

	handleTextInput(event) {
		const { name, value } = event.target
		this.setState({ newPerson: {...this.state.newPerson, [name] : value}})
	}

	handleCheckbox(event) {
		console.log(event.target)
		//Name is eg farmCrops, value is eg Trees
		const { name, value } = event.target
		let optionsArr = [...this.state.newPerson[name]]
		const index = optionsArr.indexOf(value)
		console.log(optionsArr, index)
		//If state of farmCrops does not include Trees, add Trees
		if(index > -1) {
			optionsArr = [...optionsArr.slice(0, index), ...optionsArr.slice(index + 1)]
		} else {
			//Else remove tree
			optionsArr.push(value)
		}
		this.setState({ newPerson: {...this.state.newPerson, [name] : optionsArr}})
	}

	handleImage(event) {
		const { name, files } = event.target
		// const files = event.target.files
		// const reader = new FileReader()
		// reader.readAsDataURL(files[0])
		// reader.onload = (event) => {
		// 	this.setState({newFarm: {...this.state.newFarm, 'farmImage' : event.target.result}})
		// }
		this.setState({newPerson: {...this.state.newPerson, [name] : files}})
	}

	handleAddressChange(event) {
		console.log(event)
	}

	handleSubmit() {
		alert("Submit handled")
	}

	render() {
		return (
			<main className="mainContent">
				<form className="profileForms" method="post" 
					id="farmerProfileForm" 
					onSubmit={this.handleSubmit}>
					<FormTitle text="Create your FarmApp profile" />
					<br />
					<TextInput 
						type={'text'}
						name={'firstName'}
						value={this.state.newPerson.firstName}
						placeholder={"First Name"}
						handleChange={this.handleTextInput}
					/>
					<TextInput 
						type={'text'}
						name={'lastName'}
						value={this.state.newPerson.lastName}
						placeholder={"Last Name"}
						handleChange={this.handleTextInput}
					/>
					<TextArea 
						type={'text'}
						name={'personDescription'}
						value={this.state.newPerson.personDescription}
						placeholder={"Please write a short description of yourself and your relevant experience..."}
						handleChange={this.handleTextInput}
					/>
					<Checkbox 
						name={'personAvailability'}
						title={'Your work availability (select as many as relevant)'}
						options={this.state.availabilityOptions}
						handleChange={this.handleCheckbox}
						selectedOptions={this.state.newPerson.personAvailability}
					/>
					<hr />
					<FileUpload
						name={'personImage'}
						onChange={this.handleImage}
						accept=".jpeg, .png"
						id={'personPic'}
					/>
					<hr />
					<Button class="btn btn-primary" type="submit" text="Create Your Profile"/>
				</form>
			</main>
		)
	}
}

export default FarmerForm