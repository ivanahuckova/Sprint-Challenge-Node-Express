import React from 'react';
import styled from 'styled-components';

// Import Components
import ActionDetails from './ActionDetails';

// Styled Components
const StyledProjectDetails = styled.div`
  margin: 10px 0;
  padding: 10px;
  border: 0.5px solid green;

  .project-details-row {
    padding: 5px 0;

    .project-details-span {
      color: green;
      font-weight: bold;
    }
  }
`;

// Default Export
export default function ProjectDetails(props) {
  return (
    <StyledProjectDetails>
      <div className="project-details-row">
        <span className="project-details-span">Project Name:</span>
        {props.project.name}
      </div>
      <div className="project-details-row">
        <span className="project-details-span">Project Description:</span>
        {props.project.description}
      </div>
      <div className="project-details-row">
        <span className="project-details-span">Completed:</span>
        {props.project.completed && 'Yes'}
        {!props.project.completed && 'No'}
      </div>
      <button onClick={() => props.axios_fetchProjectsActions(props.project.id)}>Would you like to see actions for this project?</button>
      <button
        onClick={() => {
          console.log(props.project);
          props.updateCurrentProject(props.project);
        }}>
        Would you like to update project
      </button>
      {props.actions &&
        props.actions[0].project_id === props.project.id &&
        props.actions.map(action => {
          return <ActionDetails key={action.id} action={action} />;
        })}
    </StyledProjectDetails>
  );
}
