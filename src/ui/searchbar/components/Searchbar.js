import React from "react";
import styled from "styled-components";
import magnifier from "../../../assets/images/magnifier.png";

const Input = styled.input`
  display: flex;
  margin: 50px auto 20px;
  width: 250px;
  height: 27px;
  background: white url(${magnifier}) no-repeat 5px 5px;
  border-radius: 15px;
  border: 2px solid #d2d2d2;
  outline: none;
  font-size: 15px;
  padding: 0 5px 0 30px;
  background-size: 17px;
`;

const Searchbar = props => (
  <Input onChange={e => props.setQuery(e.target.value)} />
);

export default Searchbar;
