import React, {Component} from 'react';

import './Courses.css';
import {Route} from "react-router-dom";
import Course from "../Course/Course";

class Courses extends Component {
  state = {
    courses: [
      {id: 1, title: 'Angular - The Complete Guide'},
      {id: 2, title: 'Vue - The Complete Guide'},
      {id: 3, title: 'PWA - The Complete Guide'}
    ]
  }

  goToCourse = (id) => {
    const course = this.state.courses.find((course) => {
      return course.id === id
    })
    if (course) {
      this.props.history.push({
        pathname: this.props.match.url + '/' + course.id,
        search: '?title=' + course.title
      })
    }
  }

  render() {
    return (
      <div>
        <h1>Amazing Udemy Courses</h1>
        <section className="Courses">
          {
            this.state.courses.map(course => {
              return <article
                className="Course"
                key={course.id}
                onClick={() => this.goToCourse(course.id)}
              >{course.title}</article>;
            })
          }
        </section>
        <Route path={this.props.match.url + '/:id'} exact component={Course}/>
      </div>
    );
  }
}

export default Courses;
