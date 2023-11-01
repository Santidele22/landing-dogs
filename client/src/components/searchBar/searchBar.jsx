import { useState } from "react";
import {SearchInput,SearchContainer } from "./styled/SearchBarStyled";
import {StyledLink} from "../../components/link/StyledLink";
export default function SearchBar() {
  const [breed, setBreed] = useState("");
  const handleChange = (e) => {
    const newBreed = e.target.value;
    setBreed(newBreed);
  };
  return (
   <SearchContainer>
      <SearchInput
        type="search"
        placeholder="Search dog by breed"
        value={breed}
        onChange={handleChange}
        autoFocus
      />
      <button>Search</button> 
        <StyledLink to={"/form"}>Create a new dog</StyledLink>
      </SearchContainer>
  );
}
