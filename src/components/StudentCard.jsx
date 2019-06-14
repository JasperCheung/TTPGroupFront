import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import './StudentCard.css';
import { Link } from 'react-router-dom';

class StudentCard extends Component {

  render(){
    let campus = <span>No campus</span>;
    if (this.props.campus) {
      campus = (
        <Link className="student-card-campus" to={`/campuses/${this.props.campus.id}`}>
          {this.props.campus.name}
        </Link>
        );
    }

  return (
    <div className="student-card">
      <img className="student-card-img" src={this.props.image} alt={`${this.props.firstName} ${this.props.lastName}`} />
      <Link className="student-card-name" to={`/students/${this.props.id}`}>
        {this.props.firstName} {this.props.lastName}
      </Link>
      {campus}
    </div>
    );
}
}

StudentCard.propTypes = {
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default StudentCard;
