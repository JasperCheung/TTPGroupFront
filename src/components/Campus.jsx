import React, { Component } from 'react';
import StudentCard from './StudentCard';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCampusThunk } from '../thunks';
import './Share.css';
import './Campus.css';

class Campus extends Component {
  componentDidMount = () => {
    this.props.fetchCampus(this.props.match.params.id);
  }

  render = () => {
    return (
      <div>
        <div className="campus-info">
          <div className="campus-img">
            <img src={this.props.campus.image} alt={this.props.name} />
          </div>
          <div className="campus-name">
            <h1>{this.props.campus.name}</h1>
          </div>
          <div className="campus-description">
            {this.props.campus.description}
          </div>
          <div className="campus-bot">
            <div>
              {this.props.campus.address}
            </div>
            <div>
              <Link to={`/edit/campuses/${this.props.campus.id}`}>edit</Link> |
              <Link to={`/delete/campuses/${this.props.campus.id}`}> delete</Link>
            </div>
          </div>
        </div>
        <div className="flex-header">
          <span>Students on campus</span>
          <Link className="button" to={`/edit/campuses/${this.props.campus.id}`}>Add Students</Link>
        </div>
        <div className="flex-container">
          {
          this.props.campus.students && this.props.campus.students.length > 0 ?
          this.props.campus.students.map((student) => <StudentCard key={student.id} { ...student } campus={this.props.campus} />) :
          <span>No students to show</span>
          }
        </div>
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
