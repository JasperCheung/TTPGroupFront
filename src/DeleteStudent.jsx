import React, { Component } from 'react';

class DeleteStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentId: props.match.params.id
    };
  }

  render = () => {
    return (
      <div>
        <h1>Deleting Student { this.state.studentId }</h1>
      </div>
      );
  }
};

export default DeleteStudent;
