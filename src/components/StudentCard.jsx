import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import './StudentCard.css';
import { Link } from 'react-router-dom';

class StudentCard extends Component {

  render(){
    return (
      <div className="student-card">
        <img className="student-card-img" src={this.props.image} alt={this.props.studentName + "image"} />
        <Link className="student-card-name" to={`/students/${this.props.id}`}>
            {this.props.studentName}
        </Link>
        <Link className="student-card-campus" to={`/campuses/${this.props.campusId}`}>
            {this.props.campusName}
        </Link>
      </div>

    );
  }

}

StudentCard.propTypes = {
  id: PropTypes.number.isRequired,
  studentName: PropTypes.string.isRequired,
  campusId: PropTypes.number.isRequired,
  campusName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default StudentCard;
