const express = require("express");
const Student = require("../models/student.model");
const router = express.Router();
const { getStudents } = require("../controllers/student.controller");

router.get("/", getStudents);

module.exports = router;
