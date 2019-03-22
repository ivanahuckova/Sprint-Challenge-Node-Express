import React from 'react';

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
      <div>
        <h3>
          {updatingProject && <div>Update the project</div>}
          {!updatingProject && <div>Add a New Project</div>}
        </h3>
        <form>
          <div>
            Project Name:
            <input type="text" ref={this.nameRef} defaultValue={(!updatingProject && '') || (updatingProject && updatingProject.name)} />
          </div>
          <div>
            Project Description:
            <input type="text" ref={this.descriptionRef} defaultValue={(!updatingProject && '') || (updatingProject && updatingProject.description)} />
          </div>
          <div>
            Completed:
            <input
              type="checkbox"
              ref={input => {
                this.completedRef = input;
              }}
              defaultChecked={(!updatingProject && false) || (updatingProject && updatingProject.completed)}
            />
          </div>

          <button
            onClick={e => {
              const name = this.nameRef.current.value;
              const description = this.descriptionRef.current.value;
              const completed = this.completedRef.checked;

              e.preventDefault();
              (!updatingProject && this.props.axios_postProject(name, description, completed)) || (updatingProject && this.props.axios_updateProject(updatingProject.id, name, description, completed));
              this.clearInputs();
            }}>
            {(!updatingProject && 'Add project') || (updatingProject && 'Update project')}
          </button>
        </form>
      </div>
    );
  }
}
