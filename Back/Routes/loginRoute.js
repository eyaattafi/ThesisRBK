const express = require('express');
const loginRouter = express.Router();
const loginController=require('../Controllers/loginCont.js');


loginRouter.post('/login', loginController.Login)




module.exports = loginRouter
