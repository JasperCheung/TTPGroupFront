import React, { Component } from 'react';
import CampusCard from './CampusCard.jsx';
import { Link } from 'react-router-dom';
import './Share.css';
import { connect } from 'react-redux';
import { fetchCampusesThunk } from '../thunks';

class Campuses extends Component {
  componentDidMount() {
    this.props.fetchAllCampuses();
  }

  render = () => {
    return (
      <div>
        <div className="flex-header">
          <span>Campuses</span>
          <Link className="button" to="/new/campuses">Add Campus</Link>
        </div>
        <div className="flex-container">
          {
          this.props.campuses.length > 0 ?
          this.props.campuses.map((campus, i) => <CampusCard key={i} { ...campus } />) :
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
