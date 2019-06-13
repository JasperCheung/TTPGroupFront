import React, { Component } from 'react';

class EditCampus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campusId: props.match.params.id
    };
  }

  render = () => {
    return (
      <div>
        <h1>Editing Campus { this.state.campusId }</h1>
      </div>
      );
  }
};

export default EditCampus;

