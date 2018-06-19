import styled from "styled-components";
import { Link as RRLink } from "react-router-dom";

export const Button = styled.button`
  display: flex;
  width: 60%;
  margin: 1rem auto;
  background-color: #ff6b81;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 0.5rem 0;
  border-radius: 2px;

  :hover {
    background-color: #ff4757;
    cursor: pointer;
  }
`;

const Link = Button.withComponent(RRLink);

export const LinkButton = Link.extend`
  text-decoration: none;

  :hover {
    color: white;
  }
`;
