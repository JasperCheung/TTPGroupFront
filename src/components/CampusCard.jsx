import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import './CampusCard.css';
import { Link } from 'react-router-dom';

class CampusCard extends Component {

  render(){
    return (
      <div className="campus-card">
        <img className="campus-card-img" src={this.props.image} alt={this.props.name + "image"} />
        <Link className="campus-card-title" to={`/campuses/${this.props.id}`}>
            <h3>{this.props.name}</h3>
        </Link>
        <p className="campus-card-num"> {this.props.numStudents} Students </p>
        <div className="campus-card-bot">
          <Link className="campus-card-edit" to={`/edit/campuses/${this.props.id}`}> edit</Link> | 
          <Link className= "delete-campus-card" to={`/delete/campuses/${this.props.id}`}> delete</Link>
        </div>
      </div>

    );
  }

}

CampusCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  numStudents: PropTypes.number.isRequired
};

export default CampusCard;
