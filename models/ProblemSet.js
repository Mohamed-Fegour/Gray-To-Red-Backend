const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ProblemSet = sequelize.define('ProblemSet', {
    ProblemSetID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    Title: { type: DataTypes.STRING(100) },
    Description: { type: DataTypes.STRING(300) },
    DifficultyLevel: { type: DataTypes.STRING(10) },
    TimeLimit: { type: DataTypes.INTEGER },
    MemoryLimit: { type: DataTypes.INTEGER },
    CreatedDate: { type: DataTypes.DATEONLY }
});

module.exports = ProblemSet;
