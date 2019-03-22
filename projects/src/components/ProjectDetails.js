import React from 'react';
import styled from 'styled-components';

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
        {props.project.description && 'Yes'}
        {!props.project.description && 'No'}
      </div>
    </StyledProjectDetails>
  );
}
