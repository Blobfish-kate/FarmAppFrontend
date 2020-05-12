import React from "react"
import axios from "axios"

import LoginComponent from "./LoginComponent"

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                username: "",
                password: ""
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({ user: {...this.state.user, [name] : value }})
    }

    handleSubmit(event) {
        event.preventDefault()

        const userObject = this.state.user

        axios.get('http://localhost:9000/user/signup')
            .then(res => console.log(res))
            .catch(err => {
                console.warn(err)
            })
    }

    render() {
        return (
            <LoginComponent 
                title="Log in to FarmApp" 
                buttonText="Login!" 
                login={true}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
            />
        )
    }
}

export default Login