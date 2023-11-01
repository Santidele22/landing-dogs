const { Router } = require("express");
const {dogsControllers, TemperamentControllers} = require("../controllers/controllers")
const dogRouter = Router();


dogRouter.get('/dogs', dogsControllers.printDogs); // todos los dogs y filtra por nombre de raza
dogRouter.get('/dogs/:idBreed', dogsControllers.printDogsById);
dogRouter.get('/temperament',TemperamentControllers.printTemperament);
dogRouter.post('/dog', dogsControllers.addDogs);

module.exports = dogRouter;
