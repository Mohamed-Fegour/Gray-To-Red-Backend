const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Score = sequelize.define('Score', {
    ScoreID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    ScoreValue: { type: DataTypes.INTEGER },
    Status: { type: DataTypes.CHAR(1) }
});

module.exports = Score;
