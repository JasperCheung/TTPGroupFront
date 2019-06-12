import React, { Component } from 'react';
import CampusCard from './CampusCard.jsx';
import { Link } from 'react-router-dom';
import './Campuses.css';

class Campuses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campuses: [
        {
          id: 0,
          name: "Hunter1",
          image: "https://www.voicesofyouth.org/sites/default/files/images/2019-03/school.jpg",
          numStudents: 1000
        },
        {
          id: 1,
          name: "Hunter2",
          image: "https://www.voicesofyouth.org/sites/default/files/images/2019-03/school.jpg",
          numStudents: 1000
        },
        {
          id: 2,
          name: "Hunter3",
          image: "https://www.voicesofyouth.org/sites/default/files/images/2019-03/school.jpg",
          numStudents: 1000
        }
      ]
    }
  }

    render = () => {
    return (
      <div>
        <h1>Campuses</h1>
        <div className="campuses-container">
          { this.state.campuses.map((campus) => {
            return <CampusCard { ...campus } />;
          }) }
          <Link to="/new/campuses">New Campus</Link>
        </div>
      </div>
      );
  }
}

export default Campuses;
