import React, { Component } from 'react';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import {BrowserRouter, Link, Route, Switch, Redirect} from "react-router-dom";
import Tasks from "./components/Tasks/Tasks";
import Page404 from "./components/Page404/Page404";

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Tasks />
          <header>
            <nav>
              <ul>
                <li>
                  <Link to="/users">Users</Link>
                </li>
                <li>
                  <Link to="/all-courses">Courses</Link>
                </li>
              </ul>
            </nav>
          </header>
          <Switch>
            <Route path="/users" exact component={Users}/>
            <Redirect from="/all-courses" to="/courses"/>
            <Route path="/courses" component={Courses}/>
            <Route component={Page404}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
