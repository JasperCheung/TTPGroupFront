import React, { Component } from 'react';

class EditStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentId: props.match.params.id
    };
  }

  render = () => {
    return (
      <div>
        <h1>Editing Student { this.state.studentId }</h1>
      </div>
      );
  }
};

export default EditStudent;

