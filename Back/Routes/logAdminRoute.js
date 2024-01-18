const express = require('express');
const logAdminRouter = express.Router();
const logAdminController=require('../Controllers/logAdminCont.js');

logAdminRouter.post('/logAdmin',logAdminController.LogAdmin)


module.exports = logAdminRouter;