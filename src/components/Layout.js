import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
`;

export const Row = Flex.extend`
  flex-flow: row;
`;

export const Column = Flex.extend`
  flex-flow: column;
`;
