/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css';
import './assets/font-awesome/css/font-awesome.css';

class Feedback extends Component {
  constructor() {
    super();
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      comments: ''
    }
  }

  fname = (event) => {
    this.setState(
      {
        firstname: event.target.value
      },
      () => console.log(`Firstname: ${this.state.firstname}`)
    );
    event.preventDefault();
  };

  lname = (event) => {
    this.setState(
      {
        lastname: event.target.value
      },
      () => console.log(`Lastname: ${this.state.lastname}`)
    );
    event.preventDefault();
  };

  email = (event) => {
    this.setState(
      {
        email: event.target.value
      },
      () => console.log(`email: ${this.state.email}`)
    );
    event.preventDefault();
  };

  comment = (event) => {
   this.setState(
     {
       comments: event.target.value
     },
     () => console.log(`comments: ${this.state.comments}`)
   );
   event.preventDefault();
 }

  render() {
    return (
      <>
        <div className="container container-fluid main">
          <div className="main-wrapper">
            <h1 className="header-text">How can we serve you better</h1>
            <div className="container">
              <span className="fa fa-angle-double-right " aria-hidden="true"></span>
              <p className="text-wrapper">Fill in your Complaints here</p>
            </div>
            <form className="myForm">
              <div className="form-row">
                <div className="col-md-12 col-sm-6 col-md-6" id="form-style">
                  <label htmlFor="FirstName">First name</label>
                  <input
                    type="text"
                    className="form-control input-styling"
                    onChange={this.fname}
                    placeholder="First name"
                    required
                  />
                </div>
                <div className="col-md-12 col-sm-6 col-md-6">
                  <label htmlFor="lastname">Last name</label>
                  <input
                    type="text"
                    className="form-control input-styling"
                    placeholder="Last name"
                    onChange={this.lname}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-12 col-sm-6 col-md-6" id="form-style">
                  <label htmlFor="Email">Email address</label>
                  <input
                    type="email"
                    className="form-control input-styling"
                    placeholder="emailaddress@email.com"
                    pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-z]{2,4})$"
                    onChange={this.email}
                    required
                  />
                </div>

                <div className="col-md-12 col-lg-12 col-sm-12">
                  <label htmlFor="comments">Comments/Suggestion</label>
                  <textarea
                    className="form-control input-styling"
                    placeholder="Write something here...."
                    onChange={this.comment}
                    required
                  ></textarea>
                </div>
              </div>
              <button className="btn btn-default submitButton" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}
export default Feedback