import { useState } from "react";
import {SearchInput,SearchContainer } from "./styled/SearchBarStyled";
import {StyledLink} from "../../components/link/StyledLink";
import {useDispatch } from "react-redux";
import {getDogById } from "../../redux/actions/actions";
export default function SearchBar() {
  const [breed, setBreed] = useState("");
  
  const dispacth = useDispatch()
  const handleChange = (e) => {
    const newBreed = e.target.value;
    setBreed(newBreed);
  }

  const onSearch = () => {
    dispacth(getDogById(breed))
    setBreed('')
  }

  
  return (
   <SearchContainer>
      <SearchInput
        type="search"
        placeholder="Search dog by breed"
        value={breed}
        onChange={handleChange}
        autoFocus
      />
      <button onClick={onSearch}>Search</button> 
        <StyledLink to={"/form"}>Create a new dog</StyledLink>
      </SearchContainer>
  );
}
