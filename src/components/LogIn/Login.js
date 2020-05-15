import React from "react"
import axios from "axios"

import LoginComponent from "./LoginComponent"
import { Redirect } from "react-router-dom"

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            redirectTo: null
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


        axios.post('http://localhost:9000/user/login', {
            username: this.state.username,
            password: this.state.password
        })
            .then(res => {
                console.log("Login response: " + res.data)
                if(res.status === 200) {
                    this.props.updateUser({
                        loggedIn: true,
                        username: res.data.username
                    })
                    this.setState({
                        redirectTo: '/farms'
                    })
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
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
}

export default Login