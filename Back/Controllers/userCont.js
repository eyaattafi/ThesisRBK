const User = require('../Models/user.js');
const jwt =require('jsonwebtoken');


const generateToken = (iduser, userName) => {
  const expiresIn = 60 * 60 * 48; // 2 days token
  return jwt.sign({ iduser,userName }, 'secretKey', { expiresIn: expiresIn });
};


//****************************** Get all users *********************************//
async function getAllUsers(req, res) {
  try {

    const allUs = await User.findAll();
    res.json(allUs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//**********************************  Get oneUser by id ************************//
async function getOneUser(req, res) {
  try {

    let oneUser=await User.findOne({where:{iduser: req.params.iduser}})
    res.json(oneUser)
   
    if (!oneUser) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//****************************** * Create new user **********************//
async function createUser(req, res) {
  try {
    const newUser = await User.create(req.body);
    const token = generateToken(newUser.iduser,newUser.userName);
    newUser.dataValues.token=token
    res.status(201).send(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

//***************************************** Update a user by ID ***********************//
async function updateUser(req, res) {
  try {
   
    const updated = await User.update(req.body, {
      where: {iduser : req.params.iduser},
    });
    if (updated) {
      const updatedUser = await User.findByPk(req.params.iduser);
      res.json(updatedUser);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// ****************************Delete a user by ID*********************************//
async function deleteUser(req, res) {
  try {

    let de=await User.destroy({where:{iduser: req.params.iduser}})
    res.json(de);

    if (de) {
      res.json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
};
