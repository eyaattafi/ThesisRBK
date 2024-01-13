const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../Models/user');



  
  const Login = async(req, res) => {
      const {userEmail,userPassword}=req.body;
      try {
           const result= await User.findOne({ where :{userEmail:userEmail}})
           if(result ===null) res.send("email not found")
           else {
            const verif=result.dataValues.userPassword
            const passwordMatch = await bcrypt.compare(userPassword,verif)
console.log("verif",verif)
console.log("pw",userPassword)
console.log("result",result)
console.log("passmatch", passwordMatch)


            if(passwordMatch){
               const token=generateToken(result.dataValues.iduser, result.dataValues.userEmail)  
               result.dataValues.token=token
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
