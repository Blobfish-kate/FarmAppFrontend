import React from "react"
import styled from "styled-components"
import logo from "./images/logo.png"

const Container = styled.div`
    background-image: url("https://www.commondreams.org/sites/default/files/styles/cd_large/public/views-article/farms.jpeg?itok=cTmtRuzF");
    background-repeat: no-repeat;
    background-size: cover;
    top: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center
`
const Logo = styled.img`
    max-height: 200px;
    margin-top: 30%;
    margin-left: auto;
    margin-right: auto;
    display: flex
`

const Title = styled.h1`
    color: white;
    font-size: 100px;
    margin-top: -20%
`
const Button = styled.button`
    padding: 4px 10px;
    margin-left: 8px;
    margin-right: 8px;
    border-radius: 10px;
    font-weight: bold
`
const ButtonContainer = styled.div`
    margin-top: 10%;
    padding: 10px;
    display: flex;
    justify-content: center
`
const Content = styled.div`
    padding-bottom: 20%;
`

function HomePage() {
    return (
        <Container>
            <Content>
                <Logo src={logo} alt="Logo"/>
                <Title>FarmApp</Title>
                <ButtonContainer>
                    <a href="/login"><Button className="btn-warning">Sign Up / Log In</Button></a>
                    <a href="/farms"><Button className="btn-success">See the Farms</Button></a>
                </ButtonContainer>
            </Content>
        </Container>
    )
}

export default HomePage