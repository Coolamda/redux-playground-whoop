import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchPosts } from "../actions/posts";
import Heading from "../components/Heading";
import Spinner from "../components/Spinner";

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
      if (!this.props.posts) {
        this.props.fetchPosts();
      }
    }

    render() {
      if (!this.props.posts) {
        return <Spinner>Loading...</Spinner>;
      }

      const { title, body } = this.props.posts[this.props.match.params.name];

      return (
        <article>
          <Heading>{title}</Heading>
          <p>{body}</p>
        </article>
      );
    }
  }
);
