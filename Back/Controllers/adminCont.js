const Admin = require('../Models/admin.js');
const jwt =require('jsonwebtoken');


const generateToken = (iduser, userName) => {
  const expiresIn = 60 * 60 * 48; // 2 days token
  return jwt.sign({ iduser,userName }, 'secretKey', { expiresIn: expiresIn });
};


//****************************** Get all users *********************************//
async function getAllAdmins(req, res) {
  try {

    const allAdm = await Admin.findAll();
    res.json(allAdm);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//**********************************  Get oneUser by id ************************//
async function getOneAdmin(req, res) {
  try {

    let oneAdmin=await Admin.findOne({where:{idadmin: req.params.idadmin}})
    res.json(oneAdmin)
   
    if (!oneAdmin) {
      res.status(404).json({ message: 'Admin not found' });
      return;
    }
 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//****************************** * Create new Admin **********************//
async function createAdmin(req, res) {
  try {
    const newAdmin = await Admin.create(req.body);
    const token = generateToken(newAdmin.idadmin,newAdmin.AdminName);
    newAdmin.dataValues.token=token
    res.status(201).send(newAdmin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

//***************************************** Update a Admin by ID ***********************//
async function updateAdmin(req, res) {
  try {
   
    const updated = await Admin.update(req.body, {
      where: {idadmin : req.params.idadmin},
    });
    if (updated) {
      const updatedAdmin = await Admin.findByPk(req.params.idadmin);
      res.json(updatedAdmin);
    } else {
      res.status(404).json({ message: 'Admin not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// ****************************Delete a Admin by ID*********************************//
async function deleteAdmin(req, res) {
  try {

    let deAdm=await Admin.destroy({where:{idadmin: req.params.idadmin}})
    res.json(deAdm);

    if (deAdm) {
      res.json({ message: 'Admin deleted successfully' });
    } else {
      res.status(404).json({ message: 'Admin not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
    getAllAdmins,
  getOneAdmin,
  createAdmin,
  updateAdmin,
  deleteAdmin,
};
