const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const db = require('../config/db');

module.exports = (sequelize, DataTypes) => {
    const apilog = sequelize.define('apilog', {
        endpoint: {
            type: DataTypes.STRING,
        },
        method: {
            type: DataTypes.STRING,
        },
        request_body: {
            type: DataTypes.TEXT,
        },
        status_code: {
            type: DataTypes.INTEGER,
        },
        timestamp: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    },
        {
            timestamps: false,     
            tableName: "apilog",
        }
    );
    return apilog;
}