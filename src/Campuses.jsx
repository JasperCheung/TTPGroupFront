import React, { Component } from 'react';
import CampusCard from './CampusCard.jsx';
import { Link } from 'react-router-dom';
import './Campuses.css';
import './CampusCard.css';

class Campuses extends Component {
  render() {
    return (
      <div className = "campuses-container">
        <CampusCard name="Hunter" id="0" image="https://www.voicesofyouth.org/sites/default/files/images/2019-03/school.jpg" numStudents={1000} />
        <CampusCard name="Hunter1" id="1" image="https://www.voicesofyouth.org/sites/default/files/images/2019-03/school.jpg" numStudents={1000} />
        <CampusCard name="Hunter2" id="2" image="https://www.voicesofyouth.org/sites/default/files/images/2019-03/school.jpg" numStudents={1000} />
        <Link to="/new/campuses">New Campus</Link>
      </div>
    );
  } 
}

export default Campuses;
