import React from "react"
import axios from "axios"

import LoginComponent from "./LoginComponent"

class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({[name] : value })
    }

    handleSubmit(event) {
        event.preventDefault()

        axios.post('http://localhost:9000/user/signup', {
            username: this.state.username,
            password: this.state.password
        })
            .then(res => {
                console.log("Result: " + res)
                if (!res.data.errmsg) {
                    console.log("Successful sign up")
                    this.setState({
                        redirectTo: "/login"
                    })
                } else {
                    console.log("Signup error")
                }
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