import React from "react"
import axios from "axios"

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
				farmID: "",
				farmName: "", 
				farmAddress: null,
				farmDescription: "",
				farmCrops: [],
				farmWorkType: [],
				farmAvailability: [],
				farmImage: null
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
		//Name is eg farmCrops, value is eg Trees
		const { name, value } = event.target
		let optionsArr = [...this.state.newFarm[name]]
		const index = optionsArr.indexOf(value)
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
		// this.setState({
		// 	newFarm: {...this.state.newFarm, 
		// 		[name] : [files[0]] }
		// })
		const { name } = event.target

		let imageFormObj = new FormData()

		imageFormObj.append("imageName", "multer-image-" + Date.now())
		imageFormObj.append("imageData", event.target.files[0])

		console.log(imageFormObj)

		this.setState({
			newFarm: {...this.state.newFarm, 
				[name] : URL.createObjectURL(event.target.files[0])
			}
		})

		axios.post('http://localhost:9000/imageUpload/upload', imageFormObj)
			.then((data) => {
				if (data.data.success) {
					alert("Image has been successfully uploaded using multer")
				}
			})
			.catch((err) => {
				alert("Error while uploading image using multer: " + err)
			})
	}

	handleAddressChange(event) {
		console.log(event)
	}

	handleSubmit(event) {
		event.preventDefault()

		const farmObject = {
			farmName: this.state.newFarm.farmName,
			farmDescription: this.state.newFarm.farmDescription,
			farmCrops: this.state.newFarm.farmCrops,
			farmImage: this.state.newFarm.farmImage,
			farmAvailability: this.state.newFarm.farmAvailability,
			farmWorkType: this.state.newFarm.farmWorkType
		}

		axios.post('http://localhost:9000/create-profile/farm', farmObject)
			.then(res => {
				this.setState({
					newFarm: {...this.state.newFarm, 
						'farmID' : res.data._id
					}
				})
			})
		
	}

	render() {
		return (
			<main className="mainContent">
				<form className="profileForms"
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
						onChange={(event) => this.handleImage(event)}
						accept=".jpeg, .png"
						id={'farmPic'}
					/>
					<hr />
					<Button class="btn btn-primary" type="submit" text="Create Farm Profile"/>
				</form>
			</main>
		)
	}
}

export default FarmForm