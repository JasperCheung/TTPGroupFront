import React, { Component } from 'react';
import './Share.css'
import axios from 'axios';

class NewCampus extends Component {
  constructor(props) {
    super(props);
    this.state = {errors: []};
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({errors:[]});
    let checkValue = (s) => s && s !== "";
    if (this.state && 
      checkValue(this.state.campusName) && 
      checkValue(this.state.campusDescription) && 
      checkValue(this.state.campusAddress)) {
      console.log("valid new campus");
      let params = {
        name: this.state.campusName,
        address: this.state.campusAddress,
        description: this.state.campusDescription
      };
      if (checkValue(this.state.campusImage)) {
        params.image = this.state.campusImage;
      }
      axios.post('http://localhost:5000/api/campuses', { params: params });
    } else {
      console.log("invalid new campus");
      let errors = [];
      if (!checkValue(this.state.campusName)) {
        errors.push(<p>Campus name is required</p>);
      }
      if (!checkValue(this.state.campusDescription)) {
        errors.push(<p>Campus description is required</p>);
      }
      if (!checkValue(this.state.campusAddress)) {
        errors.push(<p>Campus address is required</p>);
      }
      this.setState({errors:errors});
    }
  }

  campusNameChanged = (e) => {
    this.setState({campusName:e.target.value});
  }

  campusImageChanged = (e) => {
    this.setState({campusImage:e.target.value});
  }

  campusDescriptionChanged = (e) => {
    this.setState({campusDescription:e.target.value});
  }

  campusAddressChanged = (e) => {
    this.setState({campusAddress:e.target.value});
  }

  render = () => {
    return (
      <div>
        <h1>Creating New Campus</h1>
        <div className="errors">
          { this.state.errors }
        </div>
        <form onSubmit={this.handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>Campus name: </td>
                <td><input type="text" onChange={this.campusNameChanged} /></td>
              </tr>
              <tr>
                <td>Campus image: </td>
                <td><input type="text" onChange={this.campusImageChanged} placeholder="(Optional)" /></td>
              </tr>
              <tr>
                <td>Campus description: </td>
                <td><input type="text" onChange={this.campusDescriptionChanged} /></td>
              </tr>
              <tr>
                <td>Campus address: </td>
                <td><input type="text" onChange={this.campusAddressChanged} /></td>
              </tr>
              <tr>
                <td></td>
                <td><input className="button" type="submit" /></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
      );
}
};

export default NewCampus;
