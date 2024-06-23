const express = require("express");
const router = express.Router();
const userController = require('../controller/userController');
const nocache = require("nocache");

router.use(nocache());