import React from "react"
import TextInput from './FarmListComponents/TextInput'
import Checkbox from './FarmListComponents/Checkbox'
import TextArea from './FarmListComponents/TextArea'
import Button from './FarmListComponents/Button'
import FormTitle from './FarmListComponents/Title'
import FileUpload from './FarmListComponents/FileUpload'


class FarmForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			newFarm: {
				farmName: "", 
				farmAddress: {},
				farmDescription: "",
				farmCrops: ["Trees"],
				farmWorkType: [],
				farmAvailability: [],
				farmImage: ""
			},
			cropOptions: ["Trees", "Plants", "Grains", "Dairy", "Meat", "Eggs"],
			workOptions: ["Fruit picking", "Manual labour", "Animal husbandry", "Other"],
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
		this.setState({ newFarm: {...this.state.newFarm, [name] : value}})
	}

	handleCheckbox(event) {
		console.log(event.target)
		//Name is eg farmCrops, value is eg Trees
		const { name, value } = event.target
		let optionsArr = [...this.state.newFarm[name]]
		const index = optionsArr.indexOf(value)
		console.log(optionsArr, index)
		//If state of farmCrops does not include Trees, add Trees
		if(index > -1) {
			optionsArr = [...optionsArr.slice(0, index), ...optionsArr.slice(index + 1)]
		} else {
			//Else remove tree
			optionsArr.push(value)
		}
		this.setState({ newFarm: {...this.state.newFarm, [name] : optionsArr}})
	}

	handleImage(event) {
		const { name, files } = event.target
		// const files = event.target.files
		// const reader = new FileReader()
		// reader.readAsDataURL(files[0])
		// reader.onload = (event) => {
		// 	this.setState({newFarm: {...this.state.newFarm, 'farmImage' : event.target.result}})
		// }
		this.setState({newFarm: {...this.state.newFarm, [name] : files}})
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
					id="farmProfileForm" 
					onSubmit={this.handleSubmit}>
					<FormTitle text="Create a profile for your farm" />
					<br />
					<TextInput 
						type={'text'}
						name={'farmName'}
						value={this.state.newFarm.farmName}
						placeholder={"Farm Name"}
						handleChange={this.handleTextInput}
					/>
					<TextArea 
						type={'text'}
						name={'farmDescription'}
						value={this.state.newFarm.farmDescription}
						placeholder={"Please enter a short description of the farm..."}
						handleChange={this.handleTextInput}
					/>
					<Checkbox 
						name={'farmCrops'}
						title={'Crops'}
						options={this.state.cropOptions}
						handleChange={this.handleCheckbox}
						selectedOptions={this.state.newFarm.farmCrops}
					/>
					<Checkbox 
						name={'farmWorkType'}
						title={'Type of Work'}
						options={this.state.workOptions}
						handleChange={this.handleCheckbox}
						selectedOptions={this.state.newFarm.farmWorkType}
					/>
					<Checkbox 
						name={'farmAvailability'}
						title={'Availability'}
						options={this.state.availabilityOptions}
						handleChange={this.handleCheckbox}
						selectedOptions={this.state.newFarm.farmAvailability}
					/>
					<hr />
					<FileUpload
						name={'farmImage'}
						onChange={this.handleImage}
						accept=".jpeg, .png"
					/>
					<hr />
					<Button class="btn btn-primary" type="submit" text="Create Farm Profile"/>
				</form>
			</main>
		)
	}
}

export default FarmForm