import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { createPost } from "../actions/posts";
import Heading from "../components/Heading";
import Button from "../components/Button";
import TextArea from "../components/TextArea";
import Label from "../components/Label";
import Input from "../components/Input";
import Flex from "../components/Flex";

const mapDispatchToProps = dispatch => ({
  createPost: (title, body) => dispatch(createPost(title, body))
});

export default connect(
  null,
  mapDispatchToProps
)(
  class extends Component {
    state = {
      title: "",
      body: ""
    };

    onTitleChangeHandler = event => {
      this.setState({ title: event.target.value });
    };

    onBodyChangeHandler = event => {
      this.setState({ body: event.target.value });
    };

    onSubmitHandler = event => {
      event.preventDefault();
      this.props.createPost(this.state.title, this.state.body);
    };

    render() {
      return (
        <Fragment>
          <Heading>Add a post</Heading>
          <form onSubmit={this.onSubmitHandler}>
            <Flex>
              <Label>Title</Label>
              <Input
                type="text"
                placeholder="My Awesome Post"
                value={this.state.title}
                onChange={this.onTitleChangeHandler}
                required
              />
            </Flex>
            <Flex>
              <Label>Content</Label>
              <TextArea
                type="textarea"
                placeholder="What are you doing?"
                value={this.state.body}
                onChange={this.onBodyChangeHandler}
                required
              />
            </Flex>
            <Button>Submit</Button>
          </form>
        </Fragment>
      );
    }
  }
);
