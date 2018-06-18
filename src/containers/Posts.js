import React, { Component } from "react";
import Post from "../components/Post";

export default class extends Component {
  state = {
    posts: null
  };

  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    this.setState({ posts });
  }

  renderPosts = () => {
    if (!this.state.posts) {
      return <p>Loading...</p>;
    }

    return this.state.posts.map(({ id, title, body }) => (
      <Post key={id} title={title} body={body} />
    ));
  };

  render() {
    return <main>{this.renderPosts()}</main>;
  }
}
