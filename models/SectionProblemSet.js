const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const SectionProblemSet = sequelize.define('SectionProblemSet', {
});

module.exports = SectionProblemSet;
