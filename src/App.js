import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

import Layout from "./containers/Layout";
import Posts from "./containers/Posts";
import PostForm from "./containers/PostForm";
import FullPost from "./containers/FullPost";

const App = styled.div`
  width: 90%;
  margin: 1rem auto 0;

  @media (min-width: 768px) {
    width: 70%;
  }
`;

export default () => (
  <Layout>
    <App>
      <Switch>
        <Route path="/posts/:name" component={FullPost} />
        <Route path="/create-post" component={PostForm} />
        <Route exact path="/" component={Posts} />
      </Switch>
    </App>
  </Layout>
);
