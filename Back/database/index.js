const { Sequelize } = require('sequelize');

 const sequelize = new Sequelize(

  "thesisrbk",
  "root",
<<<<<<< HEAD
  "eyaattafi2003",
=======
  "rivenlol00",
>>>>>>> 9d6b630bd06f2715aefbdc9d09ec13b84d8d6aa7

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