import React from 'react';

export default class AddProject extends React.Component {
  constructor(props) {
    super(props);
    this.nameRef = React.createRef();
    this.descriptionRef = React.createRef();
  }

  render() {
    return (
      <form>
        <h3>Add a New Project</h3>
        <div>
          Project Name:
          <input type="text" ref={this.nameRef} />
        </div>
        <div>
          Project Description:
          <input type="text" ref={this.descriptionRef} />
        </div>
        <button
          onClick={e => {
            e.preventDefault();
            this.props.axios_postProject(this.nameRef.current.value, this.descriptionRef.current.value);
            this.nameRef = '';
            this.descriptionRef = '';
          }}>
          Add project
        </button>
      </form>
    );
  }
}
