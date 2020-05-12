import React from 'react';
import { Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

import Navigation from './components/navbar'
import Login from './components/LogIn/Login'
import SignUp from './components/LogIn/SignUp'
import Err from './components/Err'
import FarmList from './components/FarmList/FarmList'
import CreateProfile from './components/CreateProfile/CreateProfile'
import FarmForm from './components/Forms/FarmForm'
import FarmerForm from './components/Forms/FarmerForm'
import ShowFarmPage from './components/FarmList/ShowFarmPage'
import EditFarmForm from './components/Forms/EditFarmForm'
import HomePage from './components/HomePage'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      apiResponse: "",
      page: "FarmList"
    };
  }

  render() {
    return (
      <div>
        <Navigation />
          <Switch>
            <Route path="/" component={HomePage} exact/>
            <Route path="/login" component={Login} exact />
            <Route path="/signup" component={SignUp} exact />
            <Route path="/farms" component={FarmList} exact/>
            <Route path="/create-profile" component={CreateProfile} exact/>
            <Route path="/create-profile/farm" component={FarmForm} />
            <Route path="/create-profile/farmer" component={FarmerForm} />
            <Route path="/:id/edit" component={EditFarmForm} />
            <Route path="/:id" component={ShowFarmPage} />
            <Route component={Err} />
          </Switch>
      </div>
    )
  }
}

export default App;
