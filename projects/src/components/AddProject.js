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
          <input ref={this.nameRef} />
        </div>
        <div>
          Project Description:
          <input ref={this.descriptionRef} />
        </div>
      </form>
    );
  }
}
