// Main App Component

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";


import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Study from "./components/dashboard/Study";

import Tasks from "./components/study/Tasks";
import Finish from "./components/study/Finish";
import LandingStudy from "./components/study/LandingStudy";

import "./App.css";
import SidebarDashboard from "./components/dashboard/SidebarDashboard";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // console.log(decoded);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">

            {/* Dashboard Routes */}

            <Route exact path="/" component={Landing} />

            <Route path="/login" component={Login} />
            <Route path="/signup" component={Register} />

            <Route path="/studies" component={SidebarDashboard} />
            <Route exact path="/studies" component={Dashboard} />

            <Switch>
              <Route path="/studies/:id" component={Study} />
              <Route exact path="/:studyid/:groupid" component={LandingStudy} />
            </Switch>


            {/* Study Routes */}


            <Route path="/:studyid/:groupid/active" component={Tasks} />
            <Route path="/finished" component={Finish} />


          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;



