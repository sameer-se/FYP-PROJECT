const mongoose = require("mongoose");

const routineSchema = new mongoose.Schema({
  classroomname: {
    type: String,
    required: true,
  },
  routinefor: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  timefrom: {
    type: String,
    required: true,
  },
  timeto: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const Routine = mongoose.model("Routine", routineSchema);

module.exports = Routine;
