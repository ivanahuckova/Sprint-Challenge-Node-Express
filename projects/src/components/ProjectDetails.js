import React from 'react';
import styled from 'styled-components';

// Styled Components
const StyledProjectDetails = styled.div`
  margin: 10px 0;
  padding: 10px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  .project-heading {
    color: #23292d;
    font-size: 1.2rem;
    font-weight: bold;
    padding-bottom: 5px;
  }
  .project-details-row {
    padding: 5px 0;

    .project-details-span {
      color: #23292d;
      font-weight: 500;
      margin-right: 5px;
    }
  }
`;

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

// Default Export
export default function ProjectDetails(props) {
  return (
    <StyledProjectDetails>
      <div className="project-heading">{props.project.name}</div>
      <div className="project-details-row">
        <span className="project-details-span">Project Description:</span>
        {props.project.description}
      </div>
      <div className="project-details-row">
        <span className="project-details-span">Completed:</span>
        {props.project.completed && 'Yes'}
        {!props.project.completed && 'No'}
      </div>
      <Button
        onClick={() => {
          console.log(props.project);
          props.updateCurrentProject(props.project);
        }}>
        Update project
      </Button>
      <Button
        onClick={e => {
          e.preventDefault();
          props.axios_deleteProject(props.project.id);
        }}>
        Delete project
      </Button>
    </StyledProjectDetails>
  );
}
