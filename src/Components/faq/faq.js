/* eslint-disable class-methods-use-this */
import React , {Component} from 'react'
import "./faq.css"

class Faq extends Component{
  constructor(){
    super()
    this.state = {
      comments:""
    }
  }

text = event =>{
  this.setState({
    comments:event.target.value
  })
}

handleSubmit = event =>{
  console.log(`Comments Entered by User: ${this.state.comments}`)
  event.preventDefault();
}

  render(){
    return(
      <div className="container container-fluid faq-container">
        <div className="p-5 m-5 main-wrapper">
          <h1 className="faq-header">Ask your Questions here?</h1>
          <form onSubmit={this.handleSubmit}>
            <textarea
            onChange={this.text}
            value={this.state.comments}
            className="form-control faq-text"
            placeholder="Write something here..."
            required
            ></textarea>
            <button className="btn btn-danger">Submit</button>
          </form>
          <a href="#" className="nav-link">Some Frequently asked questions? </a>
          
        </div>
      </div>
    )
  }
}
export default Faq