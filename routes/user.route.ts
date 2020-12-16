const express = require("express");
const router = express.Router();
const { getUsers, addUser } = require("../controller/user.controller");

router.get("/", getUsers);
router.post("/", addUser);

module.exports = router;
