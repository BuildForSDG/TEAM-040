import React , {Component} from 'react'

class TestMethod extends Component{

  constructor(){
    super()
    this.state = {
      comments:""
    }
  }

  text = e =>{
    this.setState({
      comments:e.target.value
    })
  }

  Submit = () =>{
    alert(`${this.state.comments}`)
  }

  render(){
    return(
      <div>
        <form onSubmit={this.Submit}>
        <textarea placeholder="Write something here..." required value={this.state.comments} onChange={this.text}>

</textarea>
<textarea placeholder="Write something here..." value={this.state.comments} onChange={this.text}>

</textarea>
<button onSubmit={this.Submit}>Submit</button>
<button>Submit</button>
        </form>
    
      </div>
    )
  }
}
export default TestMethod