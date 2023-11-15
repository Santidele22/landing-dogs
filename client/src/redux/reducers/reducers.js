import {
  GET_DOGS,
  GET_TEMPERAMENTS,
  FILTER_BY_BREED,
  FILTER_BY_TEMPERAMENT,
  ORDER,
  ORDER_ALPH,
  GET_DOG,
  CREATE_DOG,
} from "../actions/actions-types.js";


const initialState = {
  dogs: [],
  dogsFiltered: [],
  temperaments: [],
  dogDetail: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      return {
        ...state,
        dogs: action.payload,
      };
    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };
    case GET_DOG:
      return {
        ...state,
        dogs: action.payload,
        dogDetail: action.payload,
      };
    case FILTER_BY_BREED:
      const filteredByBreed = [...state.dogs].filter(
        (dog) => dog.name === action.payload
      );
      return {
        ...state,
        dogs: filteredByBreed,
      };

    case FILTER_BY_TEMPERAMENT:
      const selectedTemperament = action.payload;
      return {
        ...state,
        dogs: selectedTemperament,
      };
    case ORDER:
      let weightDog = state.dogs
      
      const parseRange = (dog) => {
        const imperialRange = dog.weight.imperial;
        const [min, max] = imperialRange.split(" - ").map(Number);
        return [min, max];
      };

      weightDog.sort((a, b) => {
        const [aMin, aMax] = parseRange(a);
        const [bMin, bMax] = parseRange(b);
        if (action.payload === "Ascending") {
          if (aMax === bMax) {
            return aMin - bMin;
          }
        }
        return aMax - bMax;
      });

      if (action.payload === "Descending") {
        weightDog.reverse();
      }

      return {
        ...state,
        dogs: weightDog,
      };
      case ORDER_ALPH: 
      return {
        ...state,
        dogs: action.payload,
      };
    case CREATE_DOG:
      return {
        ...state,
        dogs: [...state.dogs, action.payload],
      };

    default:
      return state;
  }
};

export default reducer;