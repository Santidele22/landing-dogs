import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  filterByTemp,
  filterByBreed,
  orderDogs,
  orderDogsAlph,
  getAllDogs,
  getTemperaments,
} from "../../redux/actions/actions";
import Cards from "../../components/card/cards";
import Paginate from "../../paginate/paginate";
import {
  LandingMain,
  LandingHeader,
  LandingContainerFilters,
  LandingContainerCards,
  LandingContainerFooter,
  Text,
  SectionAside,
} from "./styled-component/landingStyled";
import SearchBar from "../../components/searchBar/searchBar";

export default function () {
  const [currentPage, setCurrentPage] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDogs());
    dispatch(getTemperaments());
  }, []);

  const { temperaments, dogs } = useSelector((state) => state);

  function handleChange(e) {
    if (e.target.name === "filterByTemperament") {
      dispatch(filterByTemp(e.target.value));
    }
    if (e.target.name === "filterByBreed") {
      if (e.target.value !== null) {
        dispatch(filterByBreed(e.target.value));
      }
      dispatch(getAllDogs());
    }
    if (e.target.name === "order") {
      dispatch(orderDogs(e.target.value));
    }
    if (e.target.name === "alph") {
      const sortedDogs = [...dogs];
      if (e.target.value === "az") {
        sortedDogs.sort((a, b) =>
          a.name && b.name ? a.name.localeCompare(b.name) : 0
        );
        dispatch(orderDogsAlph(sortedDogs));
      } else if (e.target.value === "za") {
        sortedDogs.sort((a, b) =>
          b.name && a.name ? b.name.localeCompare(a.name) : 0
        );
        dispatch(orderDogsAlph(sortedDogs));
      }
    }
  }

  const dogsPerPage = 8;
  const handlePageChange = (data) => {
    setCurrentPage(data.selected);
  };
  const pageCount = Math.ceil(dogs.length / dogsPerPage);

  return (
    <>
      <LandingHeader>
        <h1>Rincón de los Perros</h1>
        <SearchBar />
      </LandingHeader>
      <LandingMain>
        <LandingContainerFilters>
          <SectionAside>
            <h3>Filter by temperament</h3>
            <select name="filterByTemperament" onChange={handleChange}>
              <option key="Temperaments" value="">
                Temperaments
              </option>
              {temperaments?.map((e) => (
                <option key={e.id} value={e.name}>
                  {e.name}
                </option>
              ))}
            </select>
          </SectionAside>
          <SectionAside>
            <h3>Filter by breed</h3>
            <select name="filterByBreed" onChange={handleChange}>
              <option key="Breed" value="">
                Breeds
              </option>
              {dogs?.map((e) => (
                <option key={e.id} value={e.name}>
                  {e.name}
                </option>
              ))}
            </select>
          </SectionAside>
          <SectionAside>
            <h3>Order</h3>
            <select name="order" onChange={handleChange}>
              <option key="Order" value="">
                Weight
              </option>
              <option key="Asc" value="Ascending">
                Ascending
              </option>
              <option key="Desc" value="Descending">
                Descending
              </option>
            </select>
            <select name="alph" onChange={handleChange}>
              <option key="alph" value="">
                Name
              </option>
              <option key="az" value="az">
                A-Z
              </option>
              <option key="za" value="za">
                Z-A
              </option>
            </select>
          </SectionAside>
        </LandingContainerFilters>
        <LandingContainerCards>
          {dogs.length === 0 ? (
            <Text>Loading...</Text>
          ) : (
            <Cards
              dogs={dogs}
              currentPage={currentPage}
              dogsPerPage={dogsPerPage}
            />
          )}
        </LandingContainerCards>
      </LandingMain>
      <LandingContainerFooter>
        <Paginate pageCount={pageCount} onPageChange={handlePageChange} />
      </LandingContainerFooter>
    </>
  );
}
