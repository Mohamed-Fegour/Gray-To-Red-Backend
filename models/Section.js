const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Section = sequelize.define('Section', {
    SectionCode: { type: DataTypes.STRING(10), primaryKey: true },
    SectionName: { type: DataTypes.STRING(50), allowNull: false },
    SchoolYear: { type: DataTypes.STRING(10), allowNull: false },
    Semester: { type: DataTypes.STRING(10), allowNull: false }
}, { freezeTableName: true, timestamps: false });

module.exports = Section;
