const { DataTypes } = require('sequelize');
const { sequelize } = require('../mysql');

// Creating Employee table
const Employee = sequelize.define('employee', {
    Empid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        notEmpty: false
    },

    EmpName: { type: DataTypes.STRING, allowNull: false, notEmpty: false },
    JobTitle: { type: DataTypes.STRING, allowNull: false, notEmpty: false },
    // min and max values are the first and last number in the 10 digit number series to prevent from bad input values
    PhoneNumber: { type: DataTypes.BIGINT, allowNull: false, notEmpty: false, min: 1000000000, max: 9999999999 },
    Email: { type: DataTypes.STRING, allowNull: false, notEmpty: false },
    Address: { type: DataTypes.STRING, allowNull: false, notEmpty: false },
    City: { type: DataTypes.STRING, allowNull: false, notEmpty: false },
    State: { type: DataTypes.STRING, allowNull: false, notEmpty: false },

    PrimaryEmergencyContact: { type: DataTypes.STRING, allowNull: false, notEmpty: false },
    PECPhoneNumber: { type: DataTypes.BIGINT, allowNull: false, notEmpty: false },
    PECRelationship: { type: DataTypes.STRING, allowNull: false, notEmpty: false },

    SecondaryEmergencyContact: { type: DataTypes.STRING, allowNull: false },
    SECPhoneNumber: { type: DataTypes.BIGINT, allowNull: false},
    SECRelationship: { type: DataTypes.STRING, allowNull: false},
});

// Creates the table if it does not exist
sequelize.sync()

module.exports = {
    Employee
}