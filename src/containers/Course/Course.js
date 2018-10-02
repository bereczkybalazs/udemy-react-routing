import React, {Component} from 'react';

class Course extends Component {

  state = {
    title: null,
    id: null
  }

  componentDidMount() {
    this.initCourse()
  }
  componentDidUpdate() {
    this.initCourse()
  }

  initCourse = () => {
    if (this.props.match.params.id !== this.state.id) {
      this.setId()
      this.setTitle()
    }
  }

  setId = () => {
    this.setState(() => {
      return {
        id: this.props.match.params.id
      }
    })
  }

  setTitle = () => {
    const query = new URLSearchParams(this.props.location.search)
    let value, type
    for (let param of query.entries()) {
      [type, value] = param
    }
    if (type === 'title' && value) {
      this.setState({title: value})
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>You selected the Course with ID: {this.state.id}</p>
      </div>
    );
  }
}

export default Course;
