import { useState } from "react";
import { SearchInput, SearchContainer } from "./styled/SearchBarStyled";
import { StyledLink } from "../../components/link/StyledLink";
import { useDispatch } from "react-redux";
import { getAllDogs, getDogByName } from "../../redux/actions/actions";
export default function SearchBar() {
  const [name, setName] = useState([]);

  const dispacth = useDispatch();
  
  const handleChange = (e) => {
    const newBreed = e.target.value;
    setName(newBreed);
  };

  const onSearch = () => {
    dispacth(getDogByName(name));
    setName([]);
  };
  const reset = () => {
    dispacth(getAllDogs());
  };

  return (
    <SearchContainer>
      <SearchInput
        type="search"
        placeholder="Search dog by breed"
        value={name}
        onChange={handleChange}
        autoFocus
      />
      <button onClick={onSearch}>Search</button>
      <StyledLink to={"/form"}>Create a new dog</StyledLink>
      <button onClick={reset}>Reset Dog</button>
    </SearchContainer>
  );
}
