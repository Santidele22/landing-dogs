import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  filterByTemp,
  filterByBreed,
  orderDogs,
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
  }, [dispatch]);

  const { temperaments, dogs, dogsFiltered} = useSelector((state) => state);

  const showDogs = dogsFiltered.length < 1 ? dogs : dogsFiltered
 

 function handleChange (e){
  console.log(e)
  if(e.target.name === 'filterByTemperament'){
    dispatch(filterByTemp(e.target.value))
  }else if(e.target.name === 'filterByBreed'){
    dispatch(filterByBreed(e.target.value))
  }else if(e.target.name === 'order'){
    dispatch(orderDogs(e.target.value))
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
                <option key="Temperaments" value=''>Temperaments</option>
                {temperaments.map(e => (
                    <option  key={e.id} value={e.name}>{e.name}</option>
                ))}
            </select>
          </SectionAside>
          <SectionAside>
            <h3>Filter by breed</h3>
            <select name="filterByBreed" onChange={handleChange}>
                <option key="Breed" value=''>Breeds</option>
                {showDogs.map(e => (
                    <option  key={e.id} value={e.name}>{e.name}</option>
                ))}
            </select>
          </SectionAside>
          <SectionAside>
            <h3>Order</h3>
            <select name="order" onChange={handleChange}>
                <option key="Order" value=''>Sort</option>
                    <option key="Asc" value="Ascending" >Ascending</option>
                    <option key="Desc" value="Descending">Descending</option>
            </select>
          </SectionAside>
        </LandingContainerFilters>
        <LandingContainerCards>
          {dogs.length === 0 ? (
            <Text>Loading...</Text>
          ) : (
            <Cards
              dogs={showDogs}
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
