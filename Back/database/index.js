const { Sequelize } = require('sequelize');

 const sequelize = new Sequelize(

  "thesisrbk",
  "root",
<<<<<<< HEAD
  "eyaattafi2003",
=======
  "root",

>>>>>>> 619e66dfff5c745e0a68ae563cb5f26a8b90bb5b

  {
    host: "localhost",
    dialect: "mysql",
    define: {     timestamps: false  },
  }
);


sequelize.authenticate().then(()=>{console.log('Team7 connected')})
.catch(err => console.log('Unable to connect :', err))

// sequelize.sync()
//   .then(() => {
//     console.log(' Tables synchronized.');
//   })
//   .catch((error) => {
//     console.error('Error in synchronization :', error);
//   });

  module.exports = sequelize;