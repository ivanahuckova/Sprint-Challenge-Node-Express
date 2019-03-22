import React from 'react';

// Import Components
import ProjectDetails from './ProjectDetails';

export default function Project(props) {
  return (
    <div>
      <h1>Projects</h1>
      <button onClick={() => props.axios_fetchProjects()}>Show me the projects</button>
      {props.projects &&
        props.projects.map(project => {
          return <ProjectDetails key={project.id} project={project} actions={props.actions} axios_fetchProjectsActions={props.axios_fetchProjectsActions} />;
        })}
    </div>
  );
}
