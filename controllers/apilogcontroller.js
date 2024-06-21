const { DataTypes } = require('sequelize');
const apilogmodel = require('../models/apilogmodel');
const { sequelize } = require('../config/db');

const ApiLog = apilogmodel(sequelize, DataTypes);

const logApiCall = async (req, res, next) => {
    const { method, url, body } = req;
    const statusCode = res.statusCode;
    const requestBody = JSON.stringify(body || null).replace(/["]/g, '');

    try {
        const apiLog = await ApiLog.create({
            endpoint: url,
            method,
            request_body: requestBody,
            status_code: statusCode,
        });

        res.locals.apiLog = apiLog;    
        next();
    } catch (error) {
        console.error('Error logging API request:', error);
        next(error);
    }
};

module.exports = { logApiCall };