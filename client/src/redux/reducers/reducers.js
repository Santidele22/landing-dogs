import {
  GET_DOGS,
  GET_TEMPERAMENTS,
  FILTER_BY_BREED,
  FILTER_BY_TEMPERAMENT,
  ORDER,
} from "../actions/actions-types.js";

const initialState = {
  dogs: [],
  dogsFiltered: [],
  temperaments: [],
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
    case FILTER_BY_BREED:
      const filteredByBreed = [...state.dogs].filter(
        (dog) => dog.name === action.payload
      );
      return {
        ...state,
        dogsFiltered: filteredByBreed,
      };
      case FILTER_BY_TEMPERAMENT:
        const selectedTemperament = action.payload;
      
        // Filtra los perros que tienen el temperamento seleccionado
        const filteredByTemp = state.dogs.filter((dog) => {
          // Comprueba si el temperamento está en la lista de temperamentos del perro
          if (Array.isArray(dog.Temperaments)) {
            return dog.Temperaments.includes(selectedTemperament);
          } else if (typeof dog.Temperaments === "string") {
            return dog.Temperaments.includes(selectedTemperament);
          }
          return false;
        });
      
        return {
          ...state,
          dogsFiltered: filteredByTemp,
        };
      

      

    case ORDER:
      let weightDog = !state.dogsFiltered.length
        ? state.dogs
        : state.dogsFiltered;

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
        filteredDogs: weightDog,
      };

    default:
      return state;
  }
};

export default reducer;
