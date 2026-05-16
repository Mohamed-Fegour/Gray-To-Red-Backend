const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcrypt');

const Student = sequelize.define('Student', {
    StudentID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    FirstName: { type: DataTypes.STRING(30), allowNull: false },
    LastName: { type: DataTypes.STRING(30), allowNull: false },
    Email: { type: DataTypes.STRING(50), allowNull: false, unique: true },
    Password: { type: DataTypes.STRING(255), allowNull: false },
    SectionCode: { type: DataTypes.STRING(10), allowNull: false, 
        references: { model: 'Section', key: 'SectionCode'}}
}, {
    freezeTableName: true,
    timestamps: false,
    hooks: {
        beforeCreate: async (student) => {
            student.Password = await bcrypt.hash(student.Password, 10);
        }
    }
});

module.exports = Student;
