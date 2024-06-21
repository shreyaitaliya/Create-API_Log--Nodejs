const express = require('express');
const router = express.Router();
const usercontroller = require('../controllers/usercontroller');
const apicall = require('../middelware/apicall_log');

const ApiLogController = require("../controllers/apilogcontroller");

router.post("/log", ApiLogController.logApiCall);

router.post('/adduser', apicall, usercontroller.add_user);

module.exports = router;    
