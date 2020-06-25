/* eslint-disable class-methods-use-this */
import React , {Component} from 'react'


class Faq extends Component{

  render(){
    return(
      <div className="container cintainer-fluid faq-container">
        <div className="p-5 m-5 main-wrapper">
          <h1 className="faq-header">Ask your Questions here?</h1>
          <form>
            <textarea
            className="form-control"
            placeholder="Write something here..."
            required
            cols="20"
            rows="4"
            ></textarea>
            <button className="btn btn-danger">Submit</button>
          </form>
          <a href="#" className="nav-link">Some Frequently asked questions. </a>
          
        </div>
      </div>
    )
  }
}
export default Faq