const { on } = require('nodemon');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  database: 'de491b2k399iek',
  username: 'vwgejotzuufokw',
  password: '617267e6d73a2a328318da93c15fcf46769dc7b299d90402082ec34963e2e543',
  host: 'ec2-23-23-219-25.compute-1.amazonaws.com',
  port: 5432,
  dialect: 'postgres',
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed,
  dialectOptions: {
    ssl: {
      require: true, // This will help you. But you will see nwe error
      rejectUnauthorized: false // This line will fix new error
    }
  },
});

const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

connection();

module.exports = {
  conn: sequelize // para importart la conexión { conn } = require('./db.js');
};
