import axios from "axios";
import {
  FILTER_BY_BREED,
  FILTER_BY_TEMPERAMENT,
  ORDER,
  GET_DOGS,
  GET_TEMPERAMENTS,
} from "./actions-types";

const URL_BASE_DOGS = "http://localhost:3001/dogs";
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

export const getTemperaments = () => async (dispatch) => {
  try {
    const response = await axios.get(URL_BASE_TEMP);
    dispatch({ type: GET_TEMPERAMENTS, payload: response.data });
  } catch (error) {
    console.error("Error fetching temperaments:", error);
    dispatch({ type: GET_TEMPERAMENTS, payload: [] });
  }
};
export const filterByTemp = (temp) => {
  return { type: FILTER_BY_TEMPERAMENT, payload: temp };
};
export const filterByBreed = (breed) => {
  return { type: FILTER_BY_BREED, payload: breed };
};
export const orderDogs = (orden) => {
  return { type: ORDER, payload: orden };
};
