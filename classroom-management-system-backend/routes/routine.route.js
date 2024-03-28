const express = require("express");
const Routine = require("../models/routine.model");
const router = express.Router();
const { getRoutines } = require("../controllers/routine.controller");

// GET /routine
router.get("/", getRoutines);

module.exports = router;
