import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCampusThunk } from '../thunks';

class Campus extends Component {
  componentDidMount = () => {
    this.props.fetchCampus(this.props.match.params.id);
  }

  render = () => {
    return (
      <div>
        <h1>Campus { this.props.campus.id }</h1>
        { JSON.stringify(this.props.campus) }
      </div>
      );
  }
};

const mapStateToProps = (state) => {
  return {
    campus: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Campus);
