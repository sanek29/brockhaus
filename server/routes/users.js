const express = require("express");
const router = express.Router();
const { getToken, register } = require('../app/controllers/auth_controller');

router.post("/register", register);
router.post("/token", getToken);

module.exports = router;