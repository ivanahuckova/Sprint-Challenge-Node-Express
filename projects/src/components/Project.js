import React from 'react';
import styled from 'styled-components';

// Import Components
import ProjectDetails from './ProjectDetails';

const Button = styled.button`
  padding: 10px 15px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  border: none;
  border-radius: 50px;
  background-color: #23292d;
  color: white;
  margin: 5px;
  cursor: pointer;
`;

export default class Project extends React.Component {
  render() {
    return (
      <div>
        <h2>Project List</h2>
        <Button onClick={() => this.props.axios_fetchProjects()}>Show me the projects</Button>
        {this.props.projects &&
          this.props.projects.map(project => {
            return (
              <ProjectDetails
                key={project.id}
                project={project}
                actions={this.props.actions}
                axios_fetchProjectsActions={this.props.axios_fetchProjectsActions}
                updateCurrentProject={this.props.updateCurrentProject}
                axios_deleteProject={this.props.axios_deleteProject}
              />
            );
          })}
      </div>
    );
  }
}
