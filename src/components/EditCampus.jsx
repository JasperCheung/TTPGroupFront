import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Share.css'
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchCampusThunk } from '../thunks';

class EditCampus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [], 
      messages: [], 
      redirect: false
    };
  }

  componentDidMount = () => {
    this.props.fetchCampus(this.props.match.params.id);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (!this.state.campusName) {
      this.setState({
        campusName: this.props.campus.name,
        campusImage: this.props.campus.image,
        campusDescription: this.props.campus.description,
        campusAddress: this.props.campus.address
      });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({errors:[]});
    console.log(this.state);
    let checkValue = (s) => s && s !== "";
    if (this.state && 
      checkValue(this.state.campusName) && 
      checkValue(this.state.campusImage) && 
      checkValue(this.state.campusDescription) && 
      checkValue(this.state.campusAddress)) {
      let params = {
        name: this.state.campusName,
        image: this.state.campusImage,
        address: this.state.campusAddress,
        description: this.state.campusDescription
      };
      axios.put(`http://localhost:5000/api/campuses/${this.props.match.params.id}`, params)
        .then(() => this.setState({messages:["Saved"]}))
        .then(() => setTimeout(() => this.setState({messages:[]}), 3000));
    } else {
      let errors = [];
      if (!checkValue(this.state.campusName)) {
        errors.push("Campus name is required");
      }
      if (!checkValue(this.state.campusImage)) {
        errors.push("Campus image is required");
      }
      if (!checkValue(this.state.campusDescription)) {
        errors.push("Campus description is required");
      }
      if (!checkValue(this.state.campusAddress)) {
        errors.push("Campus address is required");
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
        { this.state.redirect ? <Redirect to="/campuses" /> : <div /> }
        <h1>Editing Campus</h1>
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
                <td>Campus name: </td>
                <td><input type="text" onChange={this.campusNameChanged} defaultValue={this.props.campus.name} /></td>
              </tr>
              <tr>
                <td>Campus image: </td>
                <td><input type="text" onChange={this.campusImageChanged} placeholder="(Optional)" defaultValue={this.props.campus.image} /></td>
              </tr>
              <tr>
                <td>Campus address: </td>
                <td><input type="text" onChange={this.campusAddressChanged} defaultValue={this.props.campus.address} /></td>
              </tr>
              <tr>
                <td>Campus description: </td>
                <td><input type="text" onChange={this.campusDescriptionChanged} defaultValue={this.props.campus.description} /></td>
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
    campus: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCampus);
