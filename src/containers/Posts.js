import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import _ from "lodash";

import { fetchPosts } from "../actions/posts";
import Post from "../components/Post";
import Spinner from "../components/Spinner";
import Heading from "../components/Heading";
import LinkButton from "../components/LinkButton";

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
        return <Spinner>Loading...</Spinner>;
      }

      return _.map(this.props.posts, ({ body, title }, id) => (
        <Post key={id} title={title} body={body} />
      ));
    };

    render() {
      return (
        <Fragment>
          <Heading>Posts</Heading>
          <LinkButton to="/create-post">Create post</LinkButton>
          <FlexContainer>{this.renderPosts()}</FlexContainer>
        </Fragment>
      );
    }
  }
);
