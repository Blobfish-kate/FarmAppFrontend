import React from "react"
import { withRouter } from "react-router-dom"
import axios from "axios"

import FarmFormContainer from "./FarmFormContainer"

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
			farmImageURL: "",
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
		const { name, value } = event.target
		let optionsArr = [...this.state.newFarm[name]]
		const index = optionsArr.indexOf(value)
	
		if(index > -1) {
			optionsArr = [...optionsArr.slice(0, index), ...optionsArr.slice(index + 1)]
		} else {
			optionsArr.push(value)
		}
		
		this.setState({ newFarm: {...this.state.newFarm, [name] : optionsArr}})
	}

	handleImage(event) {
		const { name } = event.target

		let imageFormObj = new FormData()

		imageFormObj.append("imageName", "multer-image-" + Date.now()) 
		imageFormObj.append("imageData", event.target.files[0])

		this.setState({
			newFarm: {...this.state.newFarm, 
				[name] : imageFormObj
			},
			farmImageURL: URL.createObjectURL(event.target.files[0])
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

		const imageObj = this.state.newFarm.farmImage

		axios.post('http://localhost:9000/create-profile/farm', farmObject)
			.then(res => {
				this.setState({
					newFarm: {...this.state.newFarm, 
					farmID : res.data._id
					}
				})
				const farmID = this.state.newFarm.farmID
				if(!imageObj) {
					this.props.history.push('/')
				} else {
					imageObj.append("farmID", farmID)
					axios.post('http://localhost:9000/imageUpload/upload', imageObj)
					.then((data) => {
						if (data.success) {
							alert("Image has been successfully uploaded using multer")
						}
					})
					.catch((err) => {
						alert("Error while uploading image using multer: " + err)
					})
					.then(() => {
						this.props.history.push('/')
					})
				}
			})
	}

	render() {
		return (
			<FarmFormContainer 
				formTitle = {'Create a profile for your farm'}
				buttonText = {'Create Farm Profile'}
				imageText = {'Add an image to your profile'}
				handleSubmit = {this.handleSubmit}
				handleTextInput = {this.handleTextInput}
				handleImage = {this.handleImage}
				handleCheckbox = {this.handleCheckbox}
				data = {this.state}
				image = {this.state.newFarm.farmImage}
			/>
		)
	}
}

export default withRouter(FarmForm)