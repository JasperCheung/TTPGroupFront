import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Share.css'
import axios from 'axios';

class NewStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [], 
      redirect: null
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({errors:[]});
    let checkValue = (s) => s && s !== "";
    if (this.state && 
      checkValue(this.state.studentFirstName) && 
      checkValue(this.state.studentLastName) && 
      checkValue(this.state.studentEmail) && 
      checkValue(this.state.studentGPA)) {
      let params = {
        firstName: this.state.studentFirstName,
        lastName: this.state.studentLastName,
        email: this.state.studentEmail,
        gpa: this.state.studentGPA
      };
      if (this.state.studentImage) {
        params.image = this.state.studentImage
      }
      axios.post("http://localhost:5000/api/students/", params)
        .then(() => this.setState({redirect:<Redirect to={"/students/"} />}));
    } else {
      let errors = [];
      if (!checkValue(this.state.studentFirstName)) {
        errors.push("Student first name is required");
      }
      if (!checkValue(this.state.studentLastName)) {
        errors.push("Student last name is required");
      }
      if (!checkValue(this.state.studentEmail)) {
        errors.push("Student email is required");
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

  studentEmailChanged = (e) => {
    this.setState({studentEmail:e.target.value});
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
        <h1>Creating New Student</h1>
        <div className="errors">
          { this.state.errors.map((s, i) => <p key={i}>{s}</p>) }
        </div>
        <form onSubmit={this.handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>Student first name: </td>
                <td><input type="text" onChange={this.studentFirstNameChanged} /></td>
              </tr>
              <tr>
                <td>Student last name: </td>
                <td><input type="text" onChange={this.studentLastNameChanged} /></td>
              </tr>
              <tr>
                <td>Student email: </td>
                <td><input type="text" onChange={this.studentEmailChanged} /></td>
              </tr>
              <tr>
                <td>Student GPA: </td>
                <td><input type="number" step="0.01" onChange={this.studentGPAChanged} /></td>
              </tr>
              <tr>
                <td>Student image: </td>
                <td><input type="text" placeholder="(Optional)" onChange={this.studentImageChanged} /></td>
              </tr>
              <tr>
                <td></td>
                <td><input className="button" type="submit" value="Submit" /></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
      );
}
}

export default NewStudent;
