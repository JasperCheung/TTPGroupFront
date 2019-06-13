import React, { Component } from 'react';
import StudentCard from './StudentCard';
import { Link } from 'react-router-dom';
import './Share.css';
import { connect } from 'react-redux';
import { fetchStudentsThunk } from '../thunks';

class Students extends Component {
  componentDidMount() {
    this.props.fetchAllStudents();
  }

  render() {
    return (
      <div>
        <div className="flex-header">
          <span>Students</span>
          <Link className="button" to="/new/students">New Student</Link>
        </div>
        <div className="flex-container">
          {
          this.props.students.length > 0 ?
          this.props.students.map((student) => <StudentCard key={student.id} { ...student } />) :
          <span>No students to show</span>
          }
        </div>
      </div>
      );
  } 
}

const mapStateToProps = (state) => {
  return {
    students: state
  };
};

const mapDispatchToProps = (dispatch) => { 
  return {
    fetchAllStudents: () => dispatch(fetchStudentsThunk())
  }; 
};

export default connect(mapStateToProps, mapDispatchToProps)(Students);
