import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class DeleteCampus extends Component {
  constructor(props) {
    super(props);
    this.state = {redirect: false};
  }

  render = () => {
    axios.delete(`http://localhost:5000/api/campuses/${this.props.match.params.id}`)
      .then(() => this.setState({redirect:true}));
    return (
      this.state.redirect ? <Redirect to="/campuses" /> : <div /> 
    );
  }
};

export default DeleteCampus;
