const express = require("express");
const { registerUser } = require("../controllers/auth/auth-controller");

const router = express.Router();

router.post("/register", registerUser);

console.log("Auth Routes Loaded");
module.exports = router;
