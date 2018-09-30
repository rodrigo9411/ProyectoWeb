import React, { Component } from 'react';

import {connect} from 'react-redux';


class Post extends Component {
  render() {
  return (
    <div className="post">
      <h2 className="post_title">{this.props.post.name}</h2>
      <p className="post_message">Number: {this.props.post.no}</p>
      <p className="post_message">Type: {this.props.post.typing}</p>
      <p className="post_message">Base Stat Total: {this.props.post.baseStat}</p>
      <div className="control-buttons">
        <button className="edit"
        onClick={() => this.props.dispatch({ type: 'EDIT_POST', id: this.props.post.id })
        }
        >Edit</button>
        <button className="delete"
        onClick={() => this.props.dispatch({ type: 'DELETE_POST', id: this.props.post.id })}
        >Delete</button>
  </div>
    </div>
  );
 }
}
export default connect()(Post);