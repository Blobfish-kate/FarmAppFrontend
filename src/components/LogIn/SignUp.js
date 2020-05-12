import React from "react"
import axios from "axios"

import LoginComponent from "./LoginComponent"

class SignUp extends React.Component {
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

        axios.post('http://localhost:9000/user/signup', userObject)
            .then(res => {
                console.log("Result: " + res.data)
            })
            .catch(err => {
                throw new Error(err)
            })
    }

    render() {
        return (
            <LoginComponent 
                title="Sign up to FarmApp" 
                buttonText="Sign up!" 
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
            />
        )
    }
}

export default SignUp