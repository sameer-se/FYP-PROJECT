const Routine = require("../models/routine.model");

const getRoutines = async (req, res) => {
  try {
    const routines = await Routine.find({});
    res.status(200).json(routines);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getRoutines,
};
