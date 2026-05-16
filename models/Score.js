const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Score = sequelize.define('Score', {
    ScoreID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    ScoreValue: { type: DataTypes.INTEGER },
    Status: { type: DataTypes.CHAR(1) },
    StudentID: { type: DataTypes.BIGINT, allowNull: false },
    ProblemSetID: { type: DataTypes.BIGINT, allowNull: false }
}, { freezeTableName: true, timestamps: false });

module.exports = Score;
