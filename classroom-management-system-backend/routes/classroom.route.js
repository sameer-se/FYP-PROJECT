const express = require("express");
const Classroom = require("../models/classroom.model");
const router = express.Router();
const { getClassrooms } = require("../controllers/classroom.controller");

// GET /classroom
router.get("/", getClassrooms);

module.exports = router;
