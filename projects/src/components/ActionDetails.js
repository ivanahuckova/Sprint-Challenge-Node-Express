import React from 'react';
import styled from 'styled-components';

//Styled Components
const StyledActionDetails = styled.div`
  background-color: green;
  color: white;
  .action-details-row {
    padding: 5px 0;

    .action-details-span {
      font-weight: bold;
    }
  }
`;

// Default Export
export default function ActionDetials(props) {
  return (
    <StyledActionDetails>
      <div className="action-details-row">
        <span className="action-details-span">Action decription:</span> {props.action.description}
      </div>
      <div className="action-details-row">
        <span className="action-details-span">Action notes:</span> {props.action.notes}
      </div>
      <div className="action-details-row">
        <span className="action-details-span">Completed:</span>
        {props.action.completed && 'Yes'}
        {!props.action.completed && 'No'}
      </div>
    </StyledActionDetails>
  );
}
