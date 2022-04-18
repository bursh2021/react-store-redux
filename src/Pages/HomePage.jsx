import React from "react";
import styled from "styled-components";

const WrapperFlex = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
`;

const HomePage = () => {
  return (
    <WrapperFlex>
      {" "}
      <h1>HomePage</h1>
    </WrapperFlex>
  );
};

export { HomePage };
