const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcrypt');

const Professor = sequelize.define('Professor', {
    ProfessorID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    FirstName: { type: DataTypes.STRING(30), allowNull: false },
    LastName: { type: DataTypes.STRING(30), allowNull: false },
    Email: { type: DataTypes.STRING(50), allowNull: false, unique: true },
    Password: { type: DataTypes.STRING(255), allowNull: false }
}, {
    hooks: {
        beforeCreate: async (professor) => {
            professor.Password = await bcrypt.hash(professor.Password, 10);
        }
    }
});

module.exports = Professor;
