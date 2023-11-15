const { getAllDogs, getAllTemperament } = require("../services/dogsServices");
const { Dog, Temperament } = require("../db.js");

const dogSchema = require("../utils//validation.js");

class dogsControllers {
  static async printDogs(req, res) {
    try {
      const { name } = req.query;
      const allDogs = await getAllDogs();
      if (name) {
        const filteredDogs = allDogs.filter((dog) =>
          dog.name.toLowerCase().includes(name.toLowerCase())
        );
        res.json(filteredDogs);
      } else {
        res.json(allDogs);
      }
    } catch (error) {
      res.status(500).json({ Error: error.message });
    }
  }
  static async printDogsById(req, res) {
    try {
      const { idBreed } = req.params;
      if (idBreed) {
        const dogs = await getAllDogs();
        const filteredDogs = dogs.filter((dog) => dog.id == idBreed);
        res.json(filteredDogs);
      } else {
        return res.status(404).json({ Error: "Not Found" });
      }
    } catch (error) {
      return res.status(500).json({ Error: error.message });
    }
  }
  static async addDogs(req, res) {
    try {
      const newDog = req.body;
      const { error } = dogSchema.validate({
        name: newDog.name,
        image: newDog.image,
        height: newDog.height,
        weight: newDog.weight,
        yearsOfLife: newDog.yearsOfLife,
        origin: newDog.origin,
      });

      if (error) {
        return res.status(400).json({ error: error.details });
      }

      const createdDog = await Dog.create(newDog);

      // Verifica si se proporcionaron temperamentos y si son un arreglo de objetos
      const temperamentos = Array.isArray(newDog.Temperaments)
        ? newDog.Temperaments
        : [newDog.Temperaments];
      for (const tempObject of temperamentos) {
        if (tempObject.name) {
          const [temperament] = await Temperament.findOrCreate({
            where: { name: tempObject.name },
          });
          // Asocia el temperamento al perro recién creado
          await createdDog.addTemperament(temperament);
        }
      }
     
    const associatedTemperaments = await createdDog.getTemperaments();
    const dogWithTemperaments = createdDog.toJSON();
    dogWithTemperaments.Temperaments = associatedTemperaments;

    return res.status(201).json(dogWithTemperaments);
    } catch (error) {
      return res.status(500).json({ Error: error.message });
    }
  }
}

class TemperamentControllers {
  static async printTemperament(req, res) {
    try {
      const allTemperament = await getAllTemperament();
      res.json(allTemperament);
    } catch (error) {
      res.status(500).json({ Error: error.message });
    }
  }
}
module.exports = { dogsControllers, TemperamentControllers };
