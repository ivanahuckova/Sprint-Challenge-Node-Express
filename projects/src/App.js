import React, { Component } from 'react';
import axios from 'axios';

//Import components
import Project from './components/Project';
import AddProject from './components/AddProject';

//Styling
import './App.css';

class App extends Component {
  state = {
    projects: null,
    actions: null
  };

  axios_fetchProjects = () => {
    axios
      .get('http://localhost:9000/projects')
      .then(data => this.setState({ projects: data.data }))
      .catch(err => console.log(err));
  };

  doSomething = index => {
    this.setState(prevState => ({
      keys: prevState.keys.concat([index])
    }));
  };

  axios_fetchProjectsActions = id => {
    axios
      .get(`http://localhost:9000/projects/${id}/actions`)
      .then(data => this.setState({ actions: data.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <h1>Projects & Actions</h1>
        <AddProject />
        <Project projects={this.state.projects} actions={this.state.actions} axios_fetchProjects={this.axios_fetchProjects} axios_fetchProjectsActions={this.axios_fetchProjectsActions} />
      </div>
    );
  }
}

export default App;
