import React from 'react';
import { Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

import Navigation from './components/navbar'
import Err from './components/Err'
import FarmList from './components/FarmList/FarmList'
import CreateProfile from './components/CreateProfile/CreateProfile'
import FarmForm from './components/Forms/FarmForm'
import FarmerForm from './components/Forms/FarmerForm'



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
      <div>
        <Navigation />
          <Switch>
            <Route path="/" component={FarmList} exact/>
            <Route path="/create-profile" component={CreateProfile} exact/>
            <Route path="/create-profile/farm" component={FarmForm} />
            <Route path="/create-profile/farmer" component={FarmerForm} />
            <Route component={Err} />
          </Switch>
      </div>
    )
  }
}

export default App;
