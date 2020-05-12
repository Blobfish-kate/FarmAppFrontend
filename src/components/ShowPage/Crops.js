import React from "react"
import styled from "styled-components"

const cropImages = {
	"Trees": "https://image.flaticon.com/icons/svg/489/489969.svg", 
	"Plants":"https://image.flaticon.com/icons/svg/892/892926.svg", 
	"Grains": "https://image.flaticon.com/icons/svg/575/575435.svg", 
	"Dairy": "https://image.flaticon.com/icons/svg/2405/2405465.svg", 
	"Meat": "https://image.flaticon.com/icons/svg/415/415686.svg", 
	"Eggs": "https://image.flaticon.com/icons/svg/1951/1951379.svg"
}

const Container = styled.div`
	position: relative
`

const CropImage = styled.img`
	max-height: 20px;
	display: inline-block;
	vertical-align: middle
`

const CropContainer = styled.ul`
	list-style: none;
	padding: 0 5px;
	margin: 0 5px;
`
const ListItem = styled.li`
	display: inline-block;
	margin: 0 5px;
`


function Crops(props) {

	const cropComponents = props.crops.map(item => 
			<ListItem>
				<CropImage src={cropImages[item]} />
				<p>{item}</p>
			</ListItem>
	)


	return (
		<Container>
			<h3>Crops:</h3>
			<CropContainer>
				{cropComponents}
			</CropContainer>
		</Container>
	)
}

export default Crops