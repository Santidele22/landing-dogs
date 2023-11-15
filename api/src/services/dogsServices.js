require("dotenv").config();
const axios = require("axios");
const { Dog, Temperament } = require("../db.js");
const { API_KEY } = process.env;
const URL_API = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`;

const getAllDogs = async () => {
  try {
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
      include: [
        {
          model: Temperament,
          attributes: ["name"],
          through: { attributes: [] },
        },
      ],
    });

    const dogs = dbDogs.map((dog) => {
      const temperaments = dog.Temperaments.map((t) => ({
        id: t.id,
        name: t.name,
      }));
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

    const apiResponse = await axios.get(URL_API);
    const data = apiResponse.data;
    const apiDogs = data.map((dog) => {
      const temperaments = dog.temperament
        ? dog.temperament.split(", ").map((temp, index) => ({
            id: index + 1,
            name: temp,
          }))
        : [];

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
        Temperaments: temperaments,
        source: "api",
      };
    });

    const allDogs = [...dogs, ...apiDogs];
    return allDogs;
  } catch (error) {
    throw new Error(error);
  }
};

const getAllTemperament = async () => {
  try {
    const dbTemperaments = await Temperament.findAll();

    const response = await axios.get(URL_API);
    const data = response.data;
    const temperaments = data
    .filter((dog) => dog.temperament)
    .map((dog) => dog.temperament.split(","))
    .flat() // aplana la matriz
    .map((temperament) => temperament.trim());
    // Guarda los temperamentos en la base de datos
    for (const temperament of temperaments) {
      await Temperament.findOrCreate({ where: { name: temperament } });
    }
    return dbTemperaments;
  } catch (error) {
    throw error;
  }
};

module.exports = { getAllDogs, getAllTemperament };
