const Sequelize = require('sequelize');
const User = require('./User');

const sequelize = new Sequelize('mysql://root:19978@localhost:3306/diploma_project');

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
