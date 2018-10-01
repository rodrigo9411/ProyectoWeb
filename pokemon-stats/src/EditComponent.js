import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditComponent extends Component {
handleEdit = (e) => {
  e.preventDefault();
  const newName = this.getName.value;
  const newNo = this.getNo.value;
  const newTyping = this.getTyping.value;
  const newBaseStat = this.getBaseStat.value;
  const data = {
    newName,
    newNo,
    newTyping,
    newBaseStat
  }
  this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
}
render() {
return (
<div key={this.props.post.id} className="post">
  <form className="form" onSubmit={this.handleEdit}>
    <input required type="text" ref={(input) => this.getName = input}
    defaultValue={this.props.post.name} placeholder="Enter Name" /><br /><br />
    <textarea ref={(input) => this.getNo = input}
    defaultValue={this.props.post.no} cols="28" placeholder="Enter Pokedex No." /><br /><br />
    <textarea ref={(input) => this.getTyping = input}
    defaultValue={this.props.post.typing} cols="28" placeholder="Enter Typing" /><br /><br />
    <textarea ref={(input) => this.getBaseStat = input}
    defaultValue={this.props.post.baseStat} cols="28" placeholder="Enter Base Stat Total" /><br /><br />
    <button className="save">Update</button>
  </form>
</div>
);
}
}
export default connect()(EditComponent);
