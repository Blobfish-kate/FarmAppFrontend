import React from "react"
import { Link } from 'react-router-dom'
import axios from "axios"
import styled from "styled-components"
import Crops from "../ShowPage/Crops"

const Container = styled.div`
	border: 2px solid black;
	background: whitesmoke
`

const ShowImage = styled.img`
   	max-width: 100%;
   	max-height: 500px;
   	text-align: center;
   	object-fit: contain;
   	position: relative;
`

const Button = styled.button`
	margin: 5px;
`

class ShowFarmPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			id: "",
			farm: {},
			farmCrops: [],
			farmAvailability: [],
			farmWorkType: [],
			image: {}
		}
		this.handleDelete = this.handleDelete.bind(this)
	}

	componentDidMount() {
		let id = this.props.match.params.id
		axios.get('http://localhost:9000/' + id)
			.then(res => {
				console.log(res.data)
				this.setState({
					id: id,
					farm: res.data.farm[0],
					farmCrops: res.data.farm[0].farmCrops,
					farmAvailability: res.data.farm[0].farmAvailability,
					farmWorkType: res.data.farm[0].farmWorkType,
					image: res.data.image[0]
				})
			})
			.catch((error) => {
				console.log(error)
			})
	}

	handleDelete() {
		let id = this.state.id
		axios.delete('http://localhost:9000/' + id)
			.then(res => {
				alert(res.data)
			})
			.catch((error) => {
				console.log(error)
			})
			.then(() => {
				this.props.history.push("/")
			})
	}

	render(){

		return(
			<Container className="container">
				<h1>{this.state.farm.farmName}</h1>
				{
					this.state.image &&
					<ShowImage src={this.state.image.imageData} />
				}
				<div>
					<h2>Farm Description</h2>
					<p>{this.state.farm.farmDescription}</p>
				</div>
				{
					this.state.farmCrops.length > 0 &&
					<Crops crops={this.state.farmCrops} />
				}
				{
					this.state.farmCrops.length > 0 &&
					<Crops crops={this.state.farmCrops} />
				}
				{
					this.state.farmCrops.length > 0 &&
					<Crops crops={this.state.farmCrops} />
				}
				<Button className="btn btn-danger" onClick={this.handleDelete}>
					Delete
				</Button>
				<Link to={"/" + this.state.id + "/edit"} farm={this.state.farm}>
					<Button className="btn btn-primary">
						Edit
					</Button>
				</Link>
			</Container>
		)
	}
}

export default ShowFarmPage