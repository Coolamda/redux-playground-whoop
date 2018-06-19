import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import _ from "lodash";

import { fetchPosts } from "../actions/posts";
import Post from "../components/Post";

const FlexContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

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

      return _.map(this.props.posts, ({ body, title }, id) => (
        <Post key={id} title={title} body={body} />
      ));
    };

    render() {
      return <FlexContainer>{this.renderPosts()}</FlexContainer>;
    }
  }
);
