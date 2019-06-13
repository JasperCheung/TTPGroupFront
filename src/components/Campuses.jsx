import React, { Component } from 'react';
import CampusCard from './CampusCard.jsx';
import { Link } from 'react-router-dom';
import './Campuses.css';
import { connect } from 'react-redux';
import { fetchCampusesThunk } from '../thunks';

class Campuses extends Component {
  componentDidMount() {
    this.props.fetchAllCampuses();
  }

  render = () => {
    return (
      <div>
        <div className="campus-header">
          <span>Campuses</span>
          <Link className="new-campus-button" to="/new/campuses">Add Campus</Link>
        </div>
        <div className="campuses-container">
          {
          this.props.campuses.length > 0 ?
          this.props.campuses.map((campus) => <CampusCard key={campus.id} { ...campus } />) :
          <span>No campuses to show</span>
          }
        </div>
      </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    campuses: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllCampuses: () => dispatch(fetchCampusesThunk())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Campuses);
