const Sequelize = require('sequelize');

const sequelize = new Sequelize('myDatabase', 'admin', 'pass', {
  host: 'localhost',
  dialect: 'mariadb' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  class Persona extends Sequelize.Model {}
  Persona.init({
  Nombre: Sequelize.STRING,
  Apellido:Sequelize.STRING,
  Edad:Sequelize.INTEGER
  
}, { sequelize, modelName: 'Personas' });


/* crea PERSONA 1*/
sequelize.sync()
  .then(() => Persona.create({
    Nombre: 'Hernan',
    Apellido: 'Guzman',
    Edad: 39
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });

  /* crea PERSONA 2*/
  sequelize.sync()
  .then(() => Persona.create({
    Nombre: 'Juan',
    Apellido: 'Gonzalez',
    Edad: 42
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });


  /*ELIMINAR*/ 
  /*SE ELIMINAN LOS REGISTROS QUE TENGAN EL NOMBRE ALBERTO*/
  Persona.destroy({
    where: {
      Nombre: "Alberto"
    }
  }).then(() => {
    console.log("Elimine Registro");
  });


  
  