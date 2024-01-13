const express = require('express');
const signupController=require('../Controllers/signupCont.js');
const signupRouter = express.Router();

signupRouter.post('/signup', signupController.Signup);





module.exports = signupRouter