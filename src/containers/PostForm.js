import React, { Component, Fragment } from "react";
import styled from "styled-components";

import Heading from "../components/Heading";
import Button from "../components/Button";

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: column;
  margin: 1rem 0;
`;

const Label = styled.label`
  flex-basis: 1;
  margin-bottom: 0.4rem;
`;

const Input = styled.input`
  flex-basis: 1;
  border-radius: 2px;
  border: 1px solid #eee;
  padding: 0.25rem;
`;

const TextArea = styled.textarea`
  flex-basis: 1;
  border-radius: 2px;
  border: 1px solid #eee;
  padding: 0.25rem;
`;

export default class extends Component {
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
    console.log("Submit");
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
