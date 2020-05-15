import React from "react"
import styled from "styled-components"

const LoginForm = styled.form`
    
`

function LoginComponent(props) {
    return (
        <div className="mainContent profileForms">
            <h1>{props.title}</h1>
            <LoginForm onSubmit={props.handleSubmit}>
                <div className="form-group">
                    <label>Username:</label>
                    <input 
                        className="form-control" 
                        type="text" 
                        name="username" 
                        placeholder="Enter username" 
                        minLength="5"
                        maxLength="20"
                        onChange={props.handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input 
                        className="form-control" 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        minLength="7"
                        maxLength="20"
                        onChange={props.handleChange}
                    />
                </div>
                <button className="btn-primary">{props.buttonText}</button>
            </LoginForm>
            <br />
            {props.login && 
                <p>New to FarmApp? Create an account <a href="/signup">here</a></p>
            }
            {!props.login && 
                <p>Already have an account? Log in <a href="/login">here</a></p>
            }
        </div>
    )
}

export default LoginComponent