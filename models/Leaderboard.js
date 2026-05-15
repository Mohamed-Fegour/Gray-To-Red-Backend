const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Leaderboard = sequelize.define('Leaderboard', {
    LeaderboardID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    TotalScore: { type: DataTypes.INTEGER },
    Rank: { type: DataTypes.INTEGER },
    CompletionTime: { type: DataTypes.DECIMAL(8, 2) }
});

module.exports = Leaderboard;
