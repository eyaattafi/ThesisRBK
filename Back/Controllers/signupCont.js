const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../Models/user.js');
const {addUser} = require('./userCont.js');




const generateToken = (iduser) => {
    const expiresIn = 60 * 60 * 48;//2days
    return jwt.sign({ iduser,userEmail}, 'secretKey', { expiresIn: expiresIn });
  };

  

  
  const Signup = async (req, res) => {
    const { userEmail, userPassword  } = req.body;
  
    try {
      const hashedPassword = await bcrypt.hash(userPassword, 10);
  
      const newUser = {

        userEmail,
        userPassword: hashedPassword}
       
       addUser({ body: newUser }, res);
    } catch (error) {
      res.status(500).json({ error: 'Error' });
    }
  };
  
  
  module.exports = {
   Signup
  };
