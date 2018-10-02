import React, { Component } from 'react';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import {BrowserRouter, Route} from "react-router-dom";
import Tasks from "./components/Tasks/Tasks";

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact component={Tasks}/>
          <Route path="/users" exact component={Users}/>
          <Route path="/all-courses" exact component={Courses}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
