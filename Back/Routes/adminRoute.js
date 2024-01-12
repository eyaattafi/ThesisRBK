const adminRouter = require('express').Router();
const adminCont = require('../Controllers/adminCont.js');



// GET all admins
adminRouter.get('/alladmins', adminCont.getAllAdmins);

// GET oneAdmin by id
adminRouter.get('/oneadmin/:idadmin', adminCont.getOneAdmin);

// Create a new Admin
adminRouter.post('/addadmin', adminCont.createAdmin);

// Update a Admin by id
adminRouter.put('/updateadmin/:idadmin', adminCont.updateAdmin);

// Delete a Admin by id
adminRouter.delete('/deleteadmin/:idadmin', adminCont.deleteAdmin);

module.exports = adminRouter;
