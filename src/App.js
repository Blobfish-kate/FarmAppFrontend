import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import FarmList from './components/FarmList/FarmList'
import CreateProfile from './components/CreateProfile/CreateProfile'
import Err from  './components/Err'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      apiResponse: "",
      page: "FarmList"
    };
  }

  // callAPI() {
  //   fetch("http://localhost:9000")
  //     .then(res => res.text())
  //     .then(res => this.setState({ apiResponse: res}))
  //     .catch(err => err)
  // }

  // componentDidMount() {
  //   this.callAPI();
  // }


  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
            <Switch>
              <Route path="/" component={FarmList} exact/>
              <Route path="/create-profile" component={CreateProfile} exact/>
              <Route component={Err}/>
            </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
