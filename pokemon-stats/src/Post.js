import React, { Component } from 'react';

class Post extends Component {
  render() {
  return (
    <div>
      <h2>{this.props.post.name}</h2>
      <p>{this.props.post.typing}</p>
    </div>
  );
 }
}
export default Post;