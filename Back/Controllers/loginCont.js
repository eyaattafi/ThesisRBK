const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../Models/user');


const generateToken = (UserID,Role) => {
  const expiresIn = 60 * 60 * 48;
  return jwt.sign({ UserID, Role}, 'secretKey', { expiresIn: expiresIn });
};
  
  const Login = async(req, res) => {
      const {userEmail,userPassword}=req.body;
      try {
           const result= await User.findOne({ where :{userEmail:userEmail}})
           if(result ===null) res.send("email not found")
           else {
            const verifPassWord=result.dataValues.userPassword
            const passwordMatch = await bcrypt.compare(userPassword,verifPassWord)
console.log("verifPassWord",verifPassWord)
console.log("userpass",userPassword)
console.log("result",result)
console.log("passmatch", passwordMatch)


            if(passwordMatch){
               const token=generateToken(result.dataValues.iduser, result.dataValues.userEmail)  
               result.dataValues.token=token
console.log("token",token);
              res.send(result.dataValues)
            }
            else{
              res.send("Wrong Passeword")
            }
            
        }
      
      }
      catch (error) {res.status(500).json(error)}
  };
  


  module.exports = {
    Login
  };
