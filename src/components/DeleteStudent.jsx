import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class DeleteStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {redirect: false};
  }

  render = () => {
    axios.delete(`http://localhost:5000/api/students/${this.props.match.params.id}`)
      .then(() => this.setState({redirect:true}));
    return (
      this.state.redirect ? <Redirect to="/students" /> : <div /> 
    );
  }
};

export default DeleteStudent;
