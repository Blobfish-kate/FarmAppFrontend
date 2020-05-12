import React from "react"
import { withRouter } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import { Redirect } from "react-router"
import axios from "axios"

import FarmFormContainer from './FarmFormContainer'

class EditFarmForm extends React.Component {
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

	//componentDidMount to get farm from db
	componentDidMount() {
		const id = this.props.match.params.id
		axios.get('http://localhost:9000/' + id + '/edit')
			.then(res => {
				let foundFarm = res.data.farm[0]
				let foundImage = res.data.image[0]
				this.setState({
					newFarm: {
						farmID: id,
						farmName: foundFarm.farmName, 
						farmAddress: foundFarm.farmAddress,
						farmDescription:foundFarm.farmDescription,
						farmCrops: foundFarm.farmCrops,
						farmWorkType: foundFarm.farmWorkType,
						farmAvailability: foundFarm.farmAvailability,
						farmImage: foundImage
					},
					farmImageURL: "",
					farmImageId: foundImage._id
				})
			})
			.catch((error) => {
				console.log(error)
			})
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
		const id = this.props.match.params.id
		const imageId = this.state.farmImageId

		axios.put('http://localhost:9000/' + id, farmObject)
			.then(() => {
				if(!this.state.farmImageURL) {
					this.props.history.push('/' + id)
				} else {
					axios.put(`http://localhost:9000/imageUpload/edit/${id}/${imageId}`, imageObj)
				}
			})
			.then(this.props.history.push('/' + id))
			.catch(err => {
				alert("Error: " + err)
			})
	}

	render() {
		return(
			<FarmFormContainer
				formTitle = {'Edit Your Farm'}
				buttonText = {`Update ${this.state.newFarm.farmName}`}
				imageText = {'Edit your profile image'}
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

export default withRouter(EditFarmForm)