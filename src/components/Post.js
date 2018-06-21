import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Article = styled(Link)`
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 1rem;
  text-decoration: none;

  :hover {
    background-color: #ccc;
    cursor: pointer;
    color: black;
  }
`;

export default ({ title, body, name }) => (
  <Article to={`/posts/${name}`}>
    <h2>{title}</h2>
    <p>{body}</p>
  </Article>
);
