import React, { Component } from 'react';
import {connect} from 'react-redux';
class PostForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const name = this.getName.value;
    const typing =  this.getTyping.value;
    const no = this.getNo.value;
    const baseStat = this.getBaseStat.value;
    const data = {
      id: new Date(),
      name,
      typing,
      no,
      baseStat,
      editing:false
    }
    this.props.dispatch({
        type:'ADD_POST',
        data});
      this.getName.value = '';
      this.getTyping.value = '';
      this.getNo.value = '';
      this.getBaseStat.value = '';
  }
render() {
return (
<div className="post-container">
  <h1 className="post_heading">Add Pokemon</h1>
  <form className="form" onSubmit={this.handleSubmit} >
   <input required type="text" ref={(input) => this.getName = input}
   placeholder="Enter Pokemon Name" /><br /><br />
   <input required type="text" ref={(input) => this.getTyping = input}
   placeholder="Enter Pokedex No." /><br /><br />
   <input required type="text" ref={(input) => this.getNo = input}
   placeholder="Enter Type" /><br /><br />
   <input required type="text" ref={(input) => this.getBaseStat = input}
   placeholder="Enter Base Stats Total" /><br /><br />
   <button>Save</button>
  </form>
</div>
);
}
}
export default connect()(PostForm);