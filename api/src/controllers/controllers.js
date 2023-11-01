const { getAllDogs, getAllTemperament } = require("../services/dogsServices");
const { Dog, Temperament} = require("../db.js");

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
      // Valida los datos del nuevo perro usando el esquema de validación
      const { error } = dogSchema.validate(newDog);
      if (error) {
        return res.status(400).json({ error: error.details });
      }
  
      // Crea el nuevo perro
      const createdDog = await Dog.create(newDog);
  
      // Verifica si se proporcionaron temperamentos y si son un array
      if (newDog.temperaments && Array.isArray(newDog.temperaments)) {
        // Itera sobre los temperamentos proporcionados
        for (const temp of newDog.temperaments) {
          // Busca el temperamento en la base de datos
          const temperament = await Temperament.findOne({
            where: { name: temp },
          });
          if (temperament) {
            // Asocia el temperamento al perro recién creado
            await createdDog.addTemperament(temperament);
          } else {
            // Si el temperamento no se encuentra, crea un nuevo registro en la base de datos
            const newTemperament = await Temperament.create({
              name: temp,
            });
          
            // Luego, asocia el nuevo temperamento al perro recién creado
            await createdDog.addTemperament(newTemperament);
          }
        }
      }
      return res.status(201).json(createdDog.toJSON());
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
