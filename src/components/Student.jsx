import React, { Component } from 'react';
import CampusCard from './CampusCard';
import { connect } from 'react-redux';
import { fetchStudentThunk } from '../thunks';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Student.css';
import './Share.css';

class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchStudent(this.props.match.params.id);
  }

  handleChange = (e) => {
    this.setState({newCampusId:e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/api/students/${this.props.student.id}`, {
      campusId: this.state.newCampusId
    })
      .then(() => window.location.reload());
  }

  render = () => {
    let campus;
    if (this.props.student.campusId) {
      campus = (
        <div>
          <h3>This student is registered to a campus</h3>
          <div className="flex-container">
            <CampusCard {...this.props.student.campus} />
            <div>
              <form onSubmit={this.handleSubmit}>
                <select onChange={this.handleChange} placeholder="Select a campus">
                  <option label=" "></option>
                  { this.props.student.campuses.map((campus, i) => <option key={i} value={campus.id}>{campus.name}</option>) }
                </select> <br />
                <input type="submit" value="Change campus" />
              </form>
            </div>
          </div>
        </div>
        );
    } else if (this.props.student.campuses) {
      campus = (
        <div>
          <h3>This student is not registered to a campus</h3>
          <form onSubmit={this.handleSubmit}>
            <select onChange={this.handleChange}>
              <option label=" "></option>
              { this.props.student.campuses.map((campus, i) => <option key={i} value={campus.id}>{campus.name}</option>) }
            </select> <br />
            <input type="submit" value="Add campus" />
          </form>
        </div>
        );
    }

    return (
      <div>
        <div className="student-info">
          <div className="student-img">
            <img src={this.props.student.image} alt={this.props.firstName} />
          </div>
          <div className="student-name">
            <h1>{this.props.student.firstName} {this.props.student.lastName}</h1>
          </div>
          <div className="student-gpa">
            GPA: {this.props.student.gpa}
          </div>
          <div className="student-bot">
            <div>
              <Link to={`/edit/students/${this.props.student.id}`}>edit</Link> |
              <Link to={`/delete/students/${this.props.student.id}`}> delete</Link>
            </div>
          </div>
        </div>
        {campus}
      </div>
      );
}
};

const mapStateToProps = (state) => {
  return {
    student: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Student);
