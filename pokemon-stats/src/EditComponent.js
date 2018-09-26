import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditComponent extends Component {
handleEdit = (e) => {
  e.preventDefault();
  const newName = this.getName.value;
  const newTyping = this.getTyping.value;
  const data = {
    newName,
    newTyping
  }
  this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
}
render() {
return (
<div key={this.props.post.id} className="post">
  <form className="form" onSubmit={this.handleEdit}>
    <input required type="text" ref={(input) => this.getName = input}
    defaultValue={this.props.post.title} placeholder="Enter Name" /><br /><br />
    <textarea required rows="5" ref={(input) => this.getTyping = input}
    defaultValue={this.props.post.message} cols="28" placeholder="Enter Typing" /><br /><br />
    <button>Update</button>
  </form>
</div>
);
}
}
export default connect()(EditComponent);
