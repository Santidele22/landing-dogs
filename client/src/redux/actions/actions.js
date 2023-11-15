import axios from "axios";
import {
  FILTER_BY_BREED,
  FILTER_BY_TEMPERAMENT,
  ORDER,
  GET_DOGS,
  GET_DOG,
  GET_TEMPERAMENTS,
  CREATE_DOG,
  ORDER_ALPH,
} from "./actions-types";

const URL_BASE_DOGS = "http://localhost:3001/dogs";
const URL_BASE_DOG = "http://localhost:3001/dog";
const URL_BASE_TEMP = "http://localhost:3001/temperament";

export const getAllDogs = (dogname) => async (dispatch) => {
  try {
    const response = await (dogname
      ? axios.get(`${URL_BASE_DOGS}?name=${dogname}`)
      : axios.get(URL_BASE_DOGS));
    dispatch({ type: GET_DOGS, payload: response.data });
  } catch (error) {
    console.error("Error fetching dogs:", error);
    dispatch({ type: GET_DOGS, payload: [] });
  }
};
export const getDogByName = (dogName) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${URL_BASE_DOGS}?name=${dogName}`);
      dispatch({
        type: GET_DOG,
        payload: response.data,
      });
    } catch (error) {
      alert("Error fetching dog by ID:", error);
      dispatch({
        type: GET_DOG,
        payload: null,
      });
    }
  };
};
export const getDogById = (dogId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${URL_BASE_DOGS}/${dogId}`);
      dispatch({
        type: GET_DOG,
        payload: response.data,
      });
    } catch (error) {
      alert("Error fetching dog by ID:", error);
      dispatch({
        type: GET_DOG,
        payload: null,
      });
    }
  };
};
export const getTemperaments = () => async (dispatch) => {
  try {
    const response = await axios.get(URL_BASE_TEMP);
    dispatch({ type: GET_TEMPERAMENTS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_TEMPERAMENTS, payload: [] });
    throw Error("Error fetching temperaments:", error);
  }
};

export const createDog = (newDog) => async (dispatch) => {
  try {
    const response = await axios.post(URL_BASE_DOG, newDog);

    if (response.status === 201) {
      dispatch({ type: CREATE_DOG, payload: response.data });
    } else {
      throw new Error("Failed to create a dog");
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
export const filterByTemp = (temp) => {
  return async (dispatch)  => {
    const {data} = await axios(URL_BASE_DOGS);
    
    const dogsFilt = data.filter((dog) => {
      if (Array.isArray(dog.Temperaments)) {
        return dog.Temperaments.some((temperament) => temperament.name === temp);
      }
      return false;
    });
    console.log(dogsFilt);
     dispatch({ type: FILTER_BY_TEMPERAMENT, payload: dogsFilt,})
  };
};
export const filterByBreed = (breed) => {
  return { type: FILTER_BY_BREED, payload: breed };
};
export const orderDogs = (orden) => {
  return { type: ORDER, payload: orden };
};
export const orderDogsAlph = (alph) => {
  return { type: ORDER_ALPH, payload: alph };
};
