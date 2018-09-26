import React, { Component } from 'react';
import {connect} from 'react-redux';
class PostForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const name = this.getName.value;
    const typing =  this.getTyping.value;
    const data = {
      id: new Date(),
      name,
      typing
    }
    this.props.dispatch({
        type:'ADD_POST',
        data});
      this.getName.value = '';
      this.getTyping.value = '';
  }
render() {
return (
<div>
  <h1>Add Pokemon</h1>
  <form onSubmit={this.handleSubmit}>
   <input required type="text" ref={(input)=>this.getName = input} 
    placeholder="Enter Pokemon Name"/>
   <br /><br />
   <textarea required rows="5" ref={(input)=>this.getTyping = input} cols="28" 
    placeholder="Enter typing" />
   <br /><br />
   <button>Save</button>
  </form>
</div>
);
}
}
export default connect()(PostForm);