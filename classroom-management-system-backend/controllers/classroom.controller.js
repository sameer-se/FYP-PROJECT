const Classroom = require("../models/classroom.model");

const getClassrooms = async (req, res) => {
  try {
    const classrooms = await Classroom.find({});
    res.status(200).json(classrooms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getClassrooms,
};
