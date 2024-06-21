const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('Api-Log-Data', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(() => {
    console.log('connected');
}).catch((error) => {
    console.log(error);
    return false;
})

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

const apimodel = require('../models/apilogmodel')(sequelize, DataTypes);
const usermodel = require('../models/usermodel')

db.sequelize.sync({ force: false, alter: false }).then(() => {
    console.log('yes re-sync');
})

module.exports = db;