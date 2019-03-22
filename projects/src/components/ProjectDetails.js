import React from 'react';

export default function ProjectDetails(props) {
  return (
    <div>
      <div>
        <span>Project Name:</span>
        {props.project.name}
      </div>
    </div>
  );
}
