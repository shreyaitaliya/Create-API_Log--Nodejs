const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const User = require('../models/usermodel')(sequelize, DataTypes);
const { logApiCall } = require('./apilogcontroller');

const add_user = async (req, res, next) => {
    try {
        const { name, email } = req.body;

        const newUser = await User.create({
            name,
            email,
        });

        // Log API call
        await logApiCall(req, res, next);

        return res.status(201).json({
            message: "User created successfully",
            user: newUser,
        });
    } catch (error) {
        console.error("Error adding user:", error);
        return res.status(500).json({
            message: "Failed to create user",
            error: error.message,
        });
    }
};

module.exports = { add_user };