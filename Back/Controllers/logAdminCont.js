const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Admin = require('../Models/admin');


const generateToken = (idadmin) => {
  const expiresIn = 60 * 60 * 2;
  return jwt.sign({idadmin}, 'secretKey', { expiresIn: expiresIn });
};
  
  const LogAdmin = async(req, res) => {

      try {
        const {adminEmail,adminPassword}=req.body;
           const result= await Admin.findOne({ where :{adminEmail:adminEmail}})
           if(result ===null) res.send("email not found")
           else {
            const verifPassWord=result.dataValues.adminPassword
            const passwordMatch = await bcrypt.compare(adminPassword,verifPassWord)
console.log("verifPassWord",verifPassWord)
console.log("adminpass",adminPassword)
console.log("result",result)
console.log("passmatch", passwordMatch)


            if(passwordMatch){
               const token=generateToken(result.dataValues.idadmin, result.dataValues.adminEmail)  
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
    LogAdmin
  };
