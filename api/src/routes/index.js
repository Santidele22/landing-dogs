const { Router } = require("express");
const {dogsControllers, TemperamentControllers} = require("../controllers/controllers")
const dogRouter = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
dogRouter.get('/dogs', dogsControllers.printDogs);
dogRouter.get('/dogs/:idBreed', dogsControllers.printDogsByBreed);
dogRouter.get('/temperament',TemperamentControllers.printTemperament);
dogRouter.post('/dog', dogsControllers.addDogs);

module.exports = dogRouter;
