import styled from "styled-components";
import { Link } from "react-router-dom";

export default styled(Link)`
  display: flex;
  width: 60%;
  margin: 1rem auto;
  background-color: #ff6b81;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 0.5rem 0;
  border-radius: 2px;
  text-decoration: none;

  :hover {
    color: white;
    background-color: #ff4757;
  }
`;
