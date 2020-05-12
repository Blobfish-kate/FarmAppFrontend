import React from 'react'

class AddressForm extends React.Component {
	constructor(props) {
		super(props)

		const address = this.getEmptyAddress()
		this.state = {
			address: address,
			query: '',
			'locationId': ''
		}

		this.onQuery = this.onQuery.bind(this)
	}

	onQuery(event) {
		const query = event.target.value
		if (!query.length > 0) {
			const address = this.getEmptyAddress()
			return this.setState({
				address: address,
				query: '',
				locationId: ''
			})
		}

		const self = this
		axios.get('https://autocomplete.geocoder.api.here.com/6.2/suggest.json', {
			'params': {
	        'app_id': 'NrTNGEC368DDeygszDY8',
	        'app_code': 'l3cbR-KXYBHE0_fg8iOdeEhYCJ42d8aRZ92S2s1Ov60',
	        'query': query,
	        'maxresults': 1,
	    }}).then(function (response) {
	        const address = response.data.suggestions[0].address;
	        const id = response.data.suggestions[0].locationId;
	        self.setState({
	          'address': address,
	          'query': query,
	          'locationId': id,
	        });
	    });
	}
}

export default AdressForm