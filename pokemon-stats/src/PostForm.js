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
      typing,
      editing:false
    }
    this.props.dispatch({
        type:'ADD_POST',
        data});
      this.getName.value = '';
      this.getTyping.value = '';
  }
render() {
return (
<div className="post-container">
  <h1 className="post_heading">Add Pokemon</h1>
  <form className="form" onSubmit={this.handleSubmit} >
   <input required type="text" ref={(input) => this.getName = input}
   placeholder="Enter Pokemon Name" /><br /><br />
   <input required type="text" ref={(input) => this.getTyping = input}
   placeholder="Enter Type" /><br /><br />
   <button>Save</button>
  </form>
</div>
);
}
}
export default connect()(PostForm);