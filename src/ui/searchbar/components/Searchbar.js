import React from "react";
import styled from "styled-components";
import magnifier from "../../../assets/images/magnifier.png";
import AsyncSelect from "react-select/lib/Async";
import Select from "react-select";

const StyledSelect = styled(Select)`
  & .Select-placeholder {
    font-size: 30px;
  }
`;

const SelectContainer = styled.div`
  width: 250px;
  margin: auto;
`;

const colourStyles = {
  control: styles => ({
    ...styles,
    display: "flex",
    margin: "50px auto 20px",
    height: "27px",
    borderRadius: "15px",
    border: "2px solid #d2d2d2",
    fontSize: "15px",
    outline: "none",
    padding: "0 5px 0 30px",
    backgroundSize: "17px",
    background: `white url(${magnifier}) no-repeat 5px 5px`
  })
};

const Searchbar = props => (
  <SelectContainer>
    <Select
      styles={colourStyles}
      components={{
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null
      }}
      onInputChange={query => props.fetchArtistsList(query)}
      onChange={artist => props.setSelected(artist)}
      options={props.artistsList}
    />
  </SelectContainer>
);

export default Searchbar;
