const Admin = require('../Models/admin.js');
const jwt =require('jsonwebtoken');
const bcrypt = require('bcrypt');


const generateToken = (idadmin, adminName) => {
  const expiresIn = 60 * 60 * 2; // 2 hours token
  return jwt.sign({ idadmin,adminName }, 'secretKey', { expiresIn: expiresIn });
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
  const {adminName, adminEmail, adminPassword  } = req.body;
  try {
 
    const hashedPassword = await bcrypt.hash(adminPassword, 10);
  
    const newAdmin = {
      adminName,
      adminEmail,
      adminPassword: hashedPassword}

    const adm = await Admin.create(newAdmin);
    const token = generateToken(adm.idadmin,adm.AdminName);
    adm.dataValues.token=token
    res.status(201).send(adm);
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
  deleteAdmin
};
