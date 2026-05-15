const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const CompletedProblemSets = sequelize.define('CompletedProblemSets', {
    CompletionID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    SubmittedCode: { type: DataTypes.TEXT('long') },
    CompileTime: { type: DataTypes.DECIMAL(6, 2) },
    ExecutionTime: { type: DataTypes.DECIMAL(6, 2) },
    SubmissionDateTime: { type: DataTypes.DATE }
});

module.exports = CompletedProblemSets;
