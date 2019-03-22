import React, { Component } from 'react';
import axios from 'axios';

//Import components
import Project from './components/Project';

//Styling
import './App.css';

class App extends Component {
  state = {
    projects: null
  };

  axios_fetchProjects = () => {
    axios
      .get('http://localhost:9000/projects')
      .then(data => this.setState({ projects: data.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <h1>Projects & Actions</h1>
        <Project projects={this.state.projects} axios_fetchProjects={this.axios_fetchProjects} />
      </div>
    );
  }
}

export default App;
