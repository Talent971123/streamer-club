import React from "react";
// styled component
import styled from "styled-components";
// type
type Props = {
  children: React.ReactNode;
};

// ----------------------------------------------------------
const ContainerContent = styled.div`
  padding: 0 10px;
  margin: 0 auto;
  max-width: none;
  @media screen and (max-width: 768px) {
    padding: 0 8px;
  }
  @media screen and (max-width: 580px) {
    padding: 0 5px;
  }
  @media screen and (max-width: 425px) {
    padding: 0 3px;
  }
`;

const Container: React.FC<Props> = ({ children }) => {
  return (
    <ContainerContent className="containerContent">{children}</ContainerContent>
  );
};

export default Container;
