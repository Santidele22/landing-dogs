const URL_BASE_DOGS = "http://localhost:3001/dogs";
const getDogById = async (dogId, state) => {
  try {
    const response = await axios.get(`${URL_BASE_DOGS}/${dogId}`);
    const dog = response.data;
    if (dog.name) {
      state((oldChars) => [...oldChars, dog]);
    } else {
      window.alert("No encontramos perro con este ID");
    }
  } catch (error) {
    window.alert("No existe un perro con ese ID!");
  }
};

const filterByBreed = (dogs, breed) => {
  const filteredByBreed = dogs.filter((dog) => dog.name === breed);
  return filteredByBreed;
};

const filterByTemperament = (dogs, selectedTemperament) => {
  const filteredByTemp = dogs.filter((dog) => {
    if (Array.isArray(dog.Temperaments)) {
      const dogFiltered = dog.Temperaments.some(
        (temperament) => temperament.name === selectedTemperament
      );
      return dogFiltered;
    }
    return false;
  });
  return filteredByTemp;
};

const orderDogsByWeight = (dogs, order) => {
  const parseRange = (dog) => {
    const imperialRange = dog.weight.imperial;
    const [min, max] = imperialRange.split(" - ").map(Number);
    return [min, max];
  };

  const sortedDogs = [...dogs];

  sortedDogs.sort((a, b) => {
    const [aMin, aMax] = parseRange(a);
    const [bMin, bMax] = parseRange(b);

    if (order === "Ascending") {
      if (aMax === bMax) {
        return aMin - bMin;
      }
      return aMax - bMax;
    } else if (order === "Descending") {
      if (aMax === bMax) {
        return bMin - aMin;
      }
      return bMax - aMax;
    }

    return 0; 
  });

  return sortedDogs;
};


const orderDogsAlphabetically = (dogs, sortOrder) => {
  const sortedDogs = dogs.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    let result;

    if (sortOrder === "a-z") {
      result = nameA.localeCompare(nameB);
    } else if (sortOrder === "z-a") {
      result = nameB.localeCompare(nameA);
    } else {
      // Si sortOrder no es 'a-z' ni 'z-a', devolver 0 para mantener el orden original
      result = 0;
    }
    return result;
  });

  return sortedDogs;
};

export default {
  getDogById,
  filterByBreed,
  filterByTemperament,
  orderDogsAlphabetically,
  orderDogsByWeight,
};
