import React from 'react';
import { BrowserRounter, Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Navbar from './components/FarmList/navbar'
import FarmList from './components/FarmList/FarmList'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      apiResponse: "",
      page: "FarmList"
    };
  }

  callAPI() {
    fetch("http://localhost:9000")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res}))
      .catch(err => err)
  }

  componentDidMount() {
    this.callAPI();
  }


  render() {
    return (
      <div>
        <Navbar />
        <FarmList />
      </div>
    )
  }
}

export default App;
