import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { toast } from 'react-toastify';
import propTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import ProtectedRoute from './helpers/ProtectedRoute/ProtectedRoute';
import Welcome from './Components/Welcome/Welcome';
import Start from './Components/Start/Start';
import Loader from './Components/Loader/Loader';
import Home from './Components/Home/Home';
import Update from './Components/Profile/Update';
import Profile from './Components/Profile/Profile';
import About from './Components/About/About';
import Vote from './Components/Votes/Vote';
import Ballot from './Components/Ballot/Ballot';
import Feedback from './Components/Feedback/index'
import Faq from './Components/Feedback/faq'
import RegisterService from './containers/registerService/registerService';
import LoginService from './containers/loginService/loginService';
import ContestantService from './containers/contestantService/contestantService';





/**
 * ROUTER APP COMPONENT
 * @func App
 * @prop store
 * @description contains all the routes (secure and unsecure) of the app
 * @returns component<Component>
 */
const App = ({ store }) => {
  toast.configure({position: 'top-right', hideProgressBar: true}); // Init the toast notification in Application globaly
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <ProtectedRoute exact path="/" component={Welcome} />
          <ProtectedRoute path="/home" component={Home} />
          <ProtectedRoute path="/how_it_works" component={Start} />
          <ProtectedRoute path="/contestants" component={ContestantService} />
          <ProtectedRoute path="/vote" component={Vote} />
          <ProtectedRoute path="/ballot" component={Ballot} />
          <ProtectedRoute path="/profile_update" component={Update} />
          <ProtectedRoute path="/about" component={About} />
          <ProtectedRoute path="/loader" component={Loader} />
          <ProtectedRoute path="/profile" component={Profile} />
          <ProtectedRoute path="/Feedback" component={Feedback} />
          <Route path="/faq" component={Faq} />
          <Route path="/signIn" component={LoginService} />
          <Route path="/register" component={RegisterService} />
          

          <Route component={() => <h1>404 PAGE NOT FOUND</h1>} />
        </Switch>
      </Router>
    </Provider>
  );
};

App.propTypes = {
  store: propTypes.object.isRequired
};

export default App;
