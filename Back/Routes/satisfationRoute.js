const satisfactionRouter = require('express').Router();
const satisfaction= require('../Controllers/satisfaction.js');

satisfactionRouter.get ('/getsat',satisfaction.getsat);
satisfactionRouter.get ('/getsatisfaction/:iduser',satisfaction.getSatisfactoin);
satisfactionRouter.post ('/addSatisfaction',satisfaction.createSatisfaction);

module.exports = satisfactionRouter;
