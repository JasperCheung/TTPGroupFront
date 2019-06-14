import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Share.css'
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchStudentThunk } from '../thunks';

class EditStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [], 
      messages: [], 
      redirect: null
    };
  }

  componentDidMount = () => {
    this.props.fetchStudent(this.props.match.params.id);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (!this.state.studentFirstName) {
      this.setState({
        studentFirstName: this.props.student.firstName,
        studentLastName: this.props.student.lastName,
        studentGPA: this.props.student.gpa,
        studentImage: this.props.student.image
      });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({errors:[]});
    let checkValue = (s) => s && s !== "";
    if (this.state && 
      checkValue(this.state.studentFirstName) && 
      checkValue(this.state.studentLastName) && 
      checkValue(this.state.studentGPA) && 
      checkValue(this.state.studentImage)) {
      let params = {
        firstName: this.state.studentFirstName,
        lastName: this.state.studentLastName,
        image: this.state.studentImage,
        gpa: this.state.studentGPA
      };
      axios.put(`http://localhost:5000/api/students/${this.props.match.params.id}`, params)
        .then(() => this.setState({redirect:<Redirect to={`/students/${this.props.student.id}`} />}));
    } else {
      let errors = [];
      if (!checkValue(this.state.studentFirstName)) {
        errors.push("Student first name is required");
      }
      if (!checkValue(this.state.studentLastName)) {
        errors.push("Student last name is required");
      }
      if (!checkValue(this.state.studentImage)) {
        errors.push("Student image is required");
      }
      if (!checkValue(this.state.studentGPA)) {
        errors.push("Student GPA is required");
      }
      this.setState({errors:errors});
    }
  }

  studentFirstNameChanged = (e) => {
    this.setState({studentFirstName:e.target.value});
  }

  studentLastNameChanged = (e) => {
    this.setState({studentLastName:e.target.value});
  }

  studentGPAChanged = (e) => {
    this.setState({studentGPA:e.target.value});
  }

  studentImageChanged = (e) => {
    this.setState({studentImage:e.target.value});
  }

  render = () => {
    return (
      <div>
        { this.state.redirect ? this.state.redirect : <div /> }
        <h1>Edit Student</h1>
        <div className="errors">
          { this.state.errors.map((s, i) => <p key={i}>{s}</p>) }
        </div>
        <div className="messages">
          { this.state.messages.map((s, i) => <p key={i}>{s}</p>) }
        </div>
        <form onSubmit={this.handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>Student first name: </td>
                <td><input type="text" onChange={this.studentFirstNameChanged} defaultValue={this.props.student.firstName} /></td>
              </tr>
              <tr>
                <td>Student last name: </td>
                <td><input type="text" onChange={this.studentLastNameChanged} defaultValue={this.props.student.lastName} /></td>
              </tr>
              <tr>
                <td>Student GPA: </td>
                <td><input type="text" onChange={this.studentGPAChanged} defaultValue={this.props.student.gpa} /></td>
              </tr>
              <tr>
                <td>Student image: </td>
                <td><input type="text" onChange={this.studentImageChanged} defaultValue={this.props.student.image} /></td>
              </tr>
              <tr>
                <td></td>
                <td><input className="button" type="submit" value="Save" /></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
      );
}
}

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

export default connect(mapStateToProps, mapDispatchToProps)(EditStudent);
