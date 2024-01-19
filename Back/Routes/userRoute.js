const userRouter = require('express').Router();
const userCont = require('../Controllers/userCont.js');



// GET all users
userRouter.get('/allUsers', userCont.getAllUsers);

// Get Non blocked users // 
userRouter.get('/nonblocked',userCont.getUsersNonBlock);

// GET oneUser by id
userRouter.get('/oneUser/:iduser', userCont.getOneUser);

// GET oneUser by Email
userRouter.get('/oneUserByEmail/:userEmail', userCont.getUserByEmail);



// Create a new user
userRouter.post('/addUser', userCont.createUser);

// Update a user by id
userRouter.put('/updateUser/:iduser', userCont.updateUser);

// Delete a user by id
userRouter.delete('/deleteUser/:iduser', userCont.deleteUser);

module.exports = userRouter;
