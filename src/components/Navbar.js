import React from "react";
import styled from "styled-components";

import { NavLink } from "react-router-dom";

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
`;

const Brand = FlexItem.extend`
  font-weight: bold;
`;

const Link = styled(NavLink)`
  text-decoration: none;

  :hover {
    cursor: pointer;
    color: #666;
  }
`;

export default () => (
  <nav>
    <FlexList>
      <div>
        <Brand>
          <Link to="/">Redux</Link>
        </Brand>
      </div>
      <div>
        <FlexItem>
          <Link to="/">Posts</Link>
        </FlexItem>
        <FlexItem>
          <Link to="/photos">Photos</Link>
        </FlexItem>
      </div>
    </FlexList>
  </nav>
);
