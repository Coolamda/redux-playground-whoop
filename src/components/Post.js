import React from "react";
import styled from "styled-components";

const Article = styled.article`
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 1rem;
  flex-basis: 400px;
  margin-bottom: 1rem;

  :hover {
    background-color: #ccc;
    cursor: pointer;
  }
`;

export default ({ title, body }) => (
  <Article>
    <h2>{title}</h2>
    <p>{body}</p>
  </Article>
);
