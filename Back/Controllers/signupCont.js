const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../Models/user.js');
const { createUser} = require('./userCont.js');


  

  
  const Signup = async (req, res) => {
    const {userName, userEmail, userPassword  } = req.body;
  
    try {
      const hashedPassword = await bcrypt.hash(userPassword, 10);
  
      const newUser = {
        userName,
        userEmail,
        userPassword: hashedPassword}
       
        createUser({ body: newUser }, res);
    } catch (error) {
      res.status(500).json({ error: 'Error' });
    }
  };
  
  
  module.exports = {
   Signup
  };
