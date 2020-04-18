const express = require("express");
const router = express.Router();
const { getToken, register, currentUser } = require('../app/controllers/auth_controller');

router.post("/register", register);
router.post("/token", getToken);
router.get("/me", currentUser);

module.exports = router;