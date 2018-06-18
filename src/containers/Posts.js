import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchPosts } from "../actions/posts";
import Post from "../components/Post";

const mapStateToProps = state => ({
  posts: state.posts.posts
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  class extends Component {
    componentDidMount() {
      this.props.fetchPosts();
    }

    renderPosts = () => {
      if (!this.props.posts) {
        return <p>Loading...</p>;
      }

      return this.props.posts.map(({ id, title, body }) => (
        <Post key={id} title={title} body={body} />
      ));
    };

    render() {
      return <main>{this.renderPosts()}</main>;
    }
  }
);
