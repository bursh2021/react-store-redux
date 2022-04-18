import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const WrapperFlex = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #05052c;
  font-weight: 800;
  padding: 50px 20px;
  .link {
    display: flex;
    width: 200px;
    justify-content: space-between;
  }
  .outlet {
    color: white;
    max-width: 500px;
    ul {
      padding-top: 50px;
      display: grid;
      grid-gap: 10px;
      justify-content: space-between;
    }
    p {
      padding: 20px;
      color: white;
    }
  }
`;

const AboutPage = () => {
  return (
    <WrapperFlex>
      <div className="link">
        <NavLink to="first">телефон</NavLink>
        <NavLink to="second">доставка</NavLink>
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </WrapperFlex>
  );
};

const AboutPhone = () => {
  return (
    <>
      <ul>
        <li>1234124123</li>
        <li>1234124123</li>
        <li>1234124123</li>
        <li>1234124123</li>
      </ul>
    </>
  );
};
const AboutDelivery = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident,
        consectetur? Numquam minima quis eveniet illo similique eius? Soluta
        sapiente dignissimos voluptates perspiciatis!
      </p>
    </>
  );
};

export { AboutPage, AboutPhone, AboutDelivery };
