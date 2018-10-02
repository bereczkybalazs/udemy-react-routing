import React, { Component } from 'react';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import {BrowserRouter, Link, Route} from "react-router-dom";
import Tasks from "./components/Tasks/Tasks";
import Course from "./containers/Course/Course";

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
          <Route path="/users" exact component={Users}/>
          <Route path="/all-courses" exact component={Courses}/>
          <Route path="/course/:id" component={Course}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
