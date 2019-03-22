import React from 'react';
import styled from 'styled-components';

const StyledProject = styled.div`
  background-color: #23292d;
  color: white;
  margin: 10px 0;
  padding: 10px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const StyledInput = styled.input`
  border-radius: 10px;
  padding: 7px 10px;
  margin: 5px;
  border: none;
`;

const InvertedButton = styled.button`
  padding: 10px 15px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  border: none;
  border-radius: 50px;
  color: #23292d;
  margin: 5px;
  cursor: pointer;
`;

export default class ProjectForm extends React.Component {
  constructor(props) {
    super(props);

    this.nameRef = React.createRef();
    this.descriptionRef = React.createRef();
    this.completedRef = React.createRef();
  }

  clearInputs = () => {
    this.nameRef.current.value = '';
    this.descriptionRef.current.value = '';
    this.completedRef.checked = false;
  };

  render() {
    const updatingProject = this.props.currentProject;
    return (
      <StyledProject>
        <h2>
          {updatingProject && <div>Update the project</div>}
          {!updatingProject && <div>Add a New Project</div>}
        </h2>
        <form>
          <div>
            Name:
            <StyledInput type="text" ref={this.nameRef} defaultValue={(!updatingProject && '') || (updatingProject && updatingProject.name)} />
          </div>
          <div>
            Description:
            <StyledInput type="text" ref={this.descriptionRef} defaultValue={(!updatingProject && '') || (updatingProject && updatingProject.description)} />
          </div>
          <div>
            Completed:
            <StyledInput
              type="checkbox"
              ref={input => {
                this.completedRef = input;
              }}
              defaultChecked={(!updatingProject && false) || (updatingProject && updatingProject.completed)}
            />
          </div>

          <InvertedButton
            onClick={e => {
              const name = this.nameRef.current.value;
              const description = this.descriptionRef.current.value;
              const completed = this.completedRef.checked;

              e.preventDefault();
              (!updatingProject && this.props.axios_postProject(name, description, completed)) || (updatingProject && this.props.axios_updateProject(updatingProject.id, name, description, completed));
              this.clearInputs();
            }}>
            {(!updatingProject && 'Add project') || (updatingProject && 'Update project')}
          </InvertedButton>
          {updatingProject && <InvertedButton onClick={() => this.props.removeCurrentProject()}>Switch to add project</InvertedButton>}
        </form>
      </StyledProject>
    );
  }
}
