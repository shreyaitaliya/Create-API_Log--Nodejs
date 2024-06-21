const { techlog } = require('../middelware/sqs_request');

const apiLog = async (req, res, next) => {
    try {
        const { method, url, body } = req;
        const statusCode = res.statusCode;
        const requestBody = JSON.stringify(body || null).replace(/["]/g, '');

        const allData = { method, url, statusCode, requestBody};
        const MessageBody = {
            type: 'logApiCall',
            data: allData
        };

        await techlog(MessageBody);

        next();
    } catch (error) {
        return res.status(400).send({
            message: error.message
        });
    }
};

module.exports = apiLog;