import React from 'react';

export default class AddProject extends React.Component {
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
    return (
      <div>
        <h3>
          {this.props.currentProject && <div>Update the project</div>}
          {!this.props.currentProject && <div>Add a New Project</div>}
        </h3>
        <form>
          <div>
            Project Name:
            <input type="text" ref={this.nameRef} />
          </div>
          <div>
            Project Description:
            <input type="text" ref={this.descriptionRef} />
          </div>
          <div>
            {' '}
            Completed:
            <input
              type="checkbox"
              ref={input => {
                this.completedRef = input;
              }}
            />
          </div>
          <button
            onClick={e => {
              e.preventDefault();
              this.props.axios_postProject(this.nameRef.current.value, this.descriptionRef.current.value, this.completedRef.checked);
              this.clearInputs();
            }}>
            Add project
          </button>
        </form>
      </div>
    );
  }
}
