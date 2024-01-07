const userRouter = require('express').Router();
const userCont = require('../Controllers/userCont.js');



// GET all users
userRouter.get('/allUsers', userCont.getAllUsers);

// GET oneUser by id
userRouter.get('/oneUser/:id', userCont.getOneUser);

// Create a new user
userRouter.post('/addUser', userCont.createUser);

// Update a user by id
userRouter.put('/updateUser/:id', userCont.updateUser);

// Delete a user by id
userRouter.delete('/deleteUser/:id', userCont.deleteUser);

module.exports = userRouter;
