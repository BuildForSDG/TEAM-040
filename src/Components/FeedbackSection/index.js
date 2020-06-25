import React, { Component } from "react";

import "./asset/index.css"
import "./asset/font-awesome/css/font-awesome.css";

class Feedback extends Component {

  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}
          className="btn btn-danger">Click Me</button>
      <div className="container container-fluid main-container">
        <div className="wrapper-content">
          <h1 className="header-text">How can we serve you better</h1>
          <div className="container">
            <span class="fa fa-angle-double-right " aria-hidden="true"></span>
            <p className="mainText">fill in your Complaints here</p>
          </div>
          <form className="myForm">
            <div class="form-row">
              <div class="col-md-6 mb-3">
                <label for="">First name</label>
                <input
                  type="text"
                  class="form-control input_styling"
                  placeholder="First name"
                  required
                />
              </div>
              <div class="col-md-6 mb-3">
                <label for="lastname">Last name</label>
                <input
                  type="text"
                  class="form-control input_styling"
                  placeholder="Last name"
                  required
                />
              </div>
            </div>
            <div class="form-row">
              <div class="col-md-12 col-sm-6 col-md-6">
                <label for="Email">Email address</label>
                <input
                  type="email"
                  class="form-control input_styling" 
                    placeholder="emailaddress@email.com"
                    
                  required
                />
              </div>
             
              <div className="col-md-12 col-lg-12 col-sm-12">
                <label for="comments">Comments/Suggestion</label>
                <textarea
                  class="form-control input_styling"
                  placeholder="Write something here...."
                  required
                ></textarea>
              </div>
            </div>
              <button class="btn btn-dark mybtn"  type="submit">
              Submit
            </button>
          </form>
        </div>
        </div>
        </>
    );
  }
}
export default Feedback;
