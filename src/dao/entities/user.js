var Sequelize = require('sequelize');
var sequelize = new Sequelize('mysql://root:password@localhost:3306/nodejs');

exports = module.exports = {}

exports.User = sequelize.define('user', {
  name: {
    type: Sequelize.STRING,
    field: 'name',
    unique: true
  },
  age: {
    type: Sequelize.INTEGER,
    field: 'age'
  }
}, {
  freezeTableName: true,
  timestamps: false
});

