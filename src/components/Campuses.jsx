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
		<h1>Campuses</h1>
		<div className="campuses-container">
		  { this.props.campuses.map((campus) => <CampusCard key={campus.id} { ...campus } />) }
		  <Link to="/new/campuses">New Campus</Link>
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
