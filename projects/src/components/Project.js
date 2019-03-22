import React from 'react';

// Import Components
import ProjectDetails from './ProjectDetails';

export default class Project extends React.Component {
  render() {
    return (
      <div>
        <h1>Projects</h1>
        <button onClick={() => this.props.axios_fetchProjects()}>Show me the projects</button>
        {this.props.projects &&
          this.props.projects.map(project => {
            return (
              <ProjectDetails
                key={project.id}
                project={project}
                actions={this.props.actions}
                axios_fetchProjectsActions={this.props.axios_fetchProjectsActions}
                updateCurrentProject={this.props.updateCurrentProject}
              />
            );
          })}
      </div>
    );
  }
}
