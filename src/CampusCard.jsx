import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
//import './CampusCard.css';

class CampusCard extends Component{

  render(){
    return (
      <div className = "campus-card">
        <img className = "campus-card-img"src={this.props.image}/>
        <a className = "campus-card-title" href = {`/campuses/${this.props.id}`}> {this.props.name}</a>
        <p className = "campus-card-num"> {this.props.numStudents} Students </p>
        <div className = "campus-card-bot">
          <a className = "campus-card-edit" href = {`/edit/campuses/${this.props.id}`}> edit </a>
          <a className= "delete-campus-card" href= {`/delete/campuses/${this.props.id}`}> delete </a>
        </div>
      </div>

    );
  }

}

CampusCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  numStudents: PropTypes.number.isRequired
};

export default CampusCard;
