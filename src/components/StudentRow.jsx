import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './StudentRow.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class StudentRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  removeStudent = () => {
    axios.put(`http://localhost:5000/api/students/${this.props.id}`, {
      campusId: null
    })
      .then(() => window.location.reload());
  }

  render = () => {
    return (
      <div className="student-row">
        <img className="student-row-img" src={this.props.image} alt={this.props.name} />
        <Link className="student-row-name" to={`/students/${this.props.id}`}>
          <h3>{this.props.firstName} {this.props.lastName}</h3>
          { this.state.redirect ? this.state.redirect : <div /> }
        </Link>
        <Link className="delete-student-row" onClick={this.removeStudent}>remove from campus</Link>
      </div>
    );
  }
}

StudentRow.propTypes = {
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default StudentRow;
