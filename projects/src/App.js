import React, { Component } from 'react';
import axios from 'axios';

//Import components
import Project from './components/Project';
import ProjectForm from './components/ProjectForm';

//Styling
import './App.css';

class App extends Component {
  state = {
    projects: null,
    actions: null,
    currentProject: null
  };

  axios_fetchProjects = () => {
    axios
      .get('https://projects-and-actions.herokuapp.com/projects')
      .then(data => this.setState({ projects: data.data }))
      .catch(err => console.log(err));
  };

  axios_fetchProjectsActions = id => {
    axios
      .get(`https://projects-and-actions.herokuapp.com/projects/${id}/actions`)
      .then(data => this.setState({ actions: data.data }))
      .catch(err => console.log(err));
  };

  axios_postProject = (name, description, completed) => {
    axios
      .post('https://projects-and-actions.herokuapp.com/projects', { name: name, description: description, completed: completed })
      .then(data => console.log(data))
      .then(() => this.axios_fetchProjects())
      .catch(err => console.log(err));
  };

  axios_updateProject = (id, name, description, completed) => {
    axios
      .put(`https://projects-and-actions.herokuapp.com/projects/${id}`, { name: name, description: description, completed: completed })
      .then(data => console.log(data))
      .then(() => this.axios_fetchProjects())
      .then(() => this.removeCurrentProject())
      .catch(err => console.log(err));
  };

  axios_deleteProject = id => {
    axios
      .delete(`https://projects-and-actions.herokuapp.com/projects/${id}`)
      .then(data => console.log(data))
      .then(() => this.axios_fetchProjects())
      .catch(err => console.log(err));
  };

  updateCurrentProject = project => {
    this.setState({ currentProject: project });
  };

  removeCurrentProject = () => {
    this.setState({ currentProject: null });
  };

  render() {
    return (
      <div className="App">
        <h1>Projects & Actions</h1>
        <ProjectForm
          axios_postProject={this.axios_postProject}
          axios_updateProject={this.axios_updateProject}
          currentProject={this.state.currentProject}
          removeCurrentProject={this.removeCurrentProject}
          projects={this.state.projects}
        />
        <Project
          projects={this.state.projects}
          actions={this.state.actions}
          axios_fetchProjects={this.axios_fetchProjects}
          axios_fetchProjectsActions={this.axios_fetchProjectsActions}
          axios_deleteProject={this.axios_deleteProject}
          updateCurrentProject={this.updateCurrentProject}
        />
      </div>
    );
  }
}

export default App;
