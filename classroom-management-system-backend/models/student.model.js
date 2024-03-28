const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Please enter student name"] },
    email: { type: String, required: [true, "Please enter student email"] },
    gender: { type: String, required: [true, "Please select student gender"] },
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", StudentSchema);
module.exports = Student;
