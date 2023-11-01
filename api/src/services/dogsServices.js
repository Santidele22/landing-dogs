require("dotenv").config();
const axios = require("axios");
const { Dog, Temperament } = require("../db.js");
const { API_KEY } = process.env;
const URL_API = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`;
const getAllDogs = async () => {
  const dbDogs = await Dog.findAll({
    attributes: [
      "id",
      "name",
      "image",
      "height",
      "weight",
      "yearsOfLife",
      "origin",
    ],
    //Esta es una forma de indicar a Sequelize que deseas incluir información de otra tabla relacionada en la consulta
    includes: {
      //La base de datos que quiero incluir
      model: Temperament,
      //El atributo
      includes: ["name"],
      //: Esto se utiliza cuando tienes una relación many-to-many entre las tablas "Razas" y "Temperamentos". La tabla intermedia que conecta ambas tablas generalmente tiene atributos adicionales, pero en este caso, se están excluyendo esos atributos utilizando
      through: { attributes: [] },
    },
  });
  const dogs = await dbDogs.map((dog) => {
    const temperaments = dog.Temperaments.map((t) => t.name).join(", ");
    return {
      id: dog.id,
      name: dog.name,
      image: dog.image,
      height: {
        imperial: dog.height.imperial,
        metric: dog.height.metric,
      },
      weight: {
        imperial: dog.weight.imperial,
        metric: dog.weight.metric,
      },
      yearsOfLife: dog.yearsOfLife,
      origin: dog.origin,
      Temperaments: temperaments,
      source: "database",
    };
  });

  const dogsApi = await axios
    .get(URL_API)
    .then((response) => {
      const data = response.data;
      const mappedDogs = data.map((dog) => {
        // Aquí puedes trabajar con los datos de los perros
        return {
          id: dog.id,
          name: dog.name,
          image: dog.image.url,
          height: {
            imperial: dog.height.imperial,
            metric: dog.height.metric,
          },
          weight: {
            imperial: dog.weight.imperial,
            metric: dog.weight.metric,
          },
          yearsOfLife: dog.life_span,
          origin: dog.origin,
          Temperaments: dog.temperament,
          source: "api",
        };
      });
      return mappedDogs;
    })
    .catch((error) => {
      throw Error(error);
    });
  const allDogs = [...dogs, ...dogsApi];

  return allDogs;
};
const getAllTemperament = async () => {
  try {
    const dbTemperaments = await Temperament.findAll();

    const response = await axios.get(URL_API);
    const data = response.data;
    const temperaments = data
      .filter((dog) => dog.temperament)
      .map((dog) => dog.temperament.split(","))
      .flat(); // aplana la matriz ejemplo: pasa de esto [1, [2, 3], [4, 5, [6, 7]]]; a esto [1, 2, 3, 4, 5, 6, 7]

    // Guarda los temperamentos en la base de datos (usando el modelo Temperament)
    for (const temperament of temperaments) {
      await Temperament.findOrCreate({ where: { name: temperament } });
    }
    return dbTemperaments
  } catch (error) {
    throw error;
  }
};

module.exports = { getAllDogs, getAllTemperament };
