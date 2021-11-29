import React from "react";
// styled component
import styled from "styled-components";
// type
type Props = {
  children: React.ReactNode;
};

// ----------------------------------------------------------
const ContainerContent = styled.div`
  padding: 0 30px;
  margin: 0 auto;
  max-width: none;
  @media screen and (max-width: 768px) {
    padding: 0 37px;
  }
  @media screen and (max-width: 580px) {
    padding: 0 25px;
  }
  @media screen and (max-width: 425px) {
    padding: 0 15px;
  }
`;

const Container: React.FC<Props> = ({ children }) => {
  return <ContainerContent>{children}</ContainerContent>;
};

export default Container;
