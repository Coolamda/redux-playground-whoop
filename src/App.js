import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

import Layout from "./containers/Layout";
import Posts from "./containers/Posts";
import PostForm from "./containers/PostForm";

const App = styled.div`
  width: 60%;
  margin: 1rem auto 0;
`;

export default () => (
  <Layout>
    <App>
      <Switch>
        <Route path="/create-post" component={PostForm} />
        <Route exact path="/" component={Posts} />
      </Switch>
    </App>
  </Layout>
);
