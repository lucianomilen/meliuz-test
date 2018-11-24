import React from "react";
import logo from "../../../logo.svg";
import "./Login.css";
import styled from "styled-components";

const HeaderText = styled.h3``;

const LoginButton = styled.button`
  width: 100px;
  height: 30px;
  font-size: 15px;
  background-color: #61dafb;
  border: none;
  cursor: pointer;
  &:hover {
    background: #87e5ff;
  }
`;

const Input = styled.input`
  margin: 0 0 25px 0;
  width: 300px;
  height: 30px;
  padding: 0 5px;
  font-size: 20px;
`;

const Login = props => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <HeaderText>Welcome!</HeaderText>
      <Input
        placeholder="email"
        type="email"
        onChange={event => props.setEmail(event.target.value)}
      />
      <Input
        type="password"
        placeholder="password"
        onChange={event => props.setPassword(event.target.value)}
      />
      <LoginButton onClick={() => props.verifyAccess()}>Login</LoginButton>
    </header>
  </div>
);

export default Login;
