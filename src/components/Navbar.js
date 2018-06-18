import React from "react";
import styled from "styled-components";

const FlexList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0 1rem;
  border: 1px solid #eee;
`;

const FlexItem = styled.li`
  list-style: none;
  margin: 0;
  display: inline-block;
  padding: 1rem 0.75rem;

  :hover {
    cursor: pointer;
    color: #666;
  }
`;

const Brand = FlexItem.extend`
  font-weight: bold;
`;

export default () => (
  <nav>
    <FlexList>
      <div>
        <Brand>Redux</Brand>
      </div>
      <div>
        <FlexItem>Posts</FlexItem>
        <FlexItem>Photos</FlexItem>
      </div>
    </FlexList>
  </nav>
);
