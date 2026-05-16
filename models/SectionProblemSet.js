const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const SectionProblemSet = sequelize.define('SectionProblemSet', {
}, { freezeTableName: true, timestamps: false });

module.exports = SectionProblemSet;
