import React, { Component } from 'react';

class DeleteCampus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campusId: props.match.params.id
    };
  }

  render = () => {
    return (
      <div>
        <h1>Deleting Campus { this.state.campusId }</h1>
      </div>
      );
  }
};

export default DeleteCampus;
