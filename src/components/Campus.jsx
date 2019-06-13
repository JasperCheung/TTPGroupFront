import React, { Component } from 'react';

class Campus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campusId: props.match.params.id
    };
  }

  render = () => {
    return (
      <div>
        <h1>Campus { this.state.campusId }</h1>
      </div>
      );
  }
};

export default Campus;
