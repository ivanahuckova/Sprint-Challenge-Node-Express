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
      <form>
        <h3>Add a New Project</h3>
        <div>
          Project Name:
          <input type="text" ref={this.nameRef} required="true" />
        </div>
        <div>
          Project Description:
          <input type="text" ref={this.descriptionRef} required="true" />
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
    );
  }
}
