const express = require("express");
const router = express.Router();
const { list, create } = require('../app/controllers/orders_controller');

router.get("/", list);
router.post("/", create);

module.exports = router;
