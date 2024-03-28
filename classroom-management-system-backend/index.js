const express = require("express");
const app = express();
const cors = require("cors");
// Routes import
const studentRoute = require("./routes/student.route");
const classroomRoute = require("./routes/classroom.route");
const routineRoute = require("./routes/routine.route");
// models import
const Student = require("./models/student.model");
const Classroom = require("./models/classroom.model");
const Routine = require("./models/routine.model");

const bodyParser = require("body-parser");

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Enable All CORS Requests
const allowedOrigins = ["http://localhost:3000", "http://localhost:3001"];
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

// routes
app.use("/api/students", studentRoute);
app.use("/api/classrooms", classroomRoute);
app.use("/api/routines", routineRoute);

require("./dbconnect");

app.use(bodyParser.json());

//api requests

app.get("/", (req, res) => {
  res.send("Hello from Node API");
});

app.get("/api/students", async (req, res) => {
  try {
    const students = await Student.find({});
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/students", async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//update a student
// For Students
app.put("/api/students", async (req, res) => {
  try {
    const { id } = req.params;
    const students = await Student.findByIdAndUpdate(id, req.body);

    if (!students) {
      return res.status(400).json({ message: "Product not found" });
    }
    const updatedStudent = await Student.findById(id);
    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/api/students/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByIdAndDelete(id);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json({ message: "Student deleted sucessfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// For Classrooms

app.get("/api/classrooms", async (req, res) => {
  try {
    const classrooms = await Classroom.find({});
    res.status(200).json(classrooms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/classrooms", async (req, res) => {
  try {
    const classroom = await Classroom.create(req.body);
    res.status(200).json(classroom);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//For Routines
app.get("/api/routines", async (req, res) => {
  try {
    const routines = await Routine.find({});
    res.status(200).json(routines);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/routines", async (req, res) => {
  try {
    const routine = await Routine.create(req.body);
    res.status(200).json(routine);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(4000, () => {
  console.log("server is running in 4000");
});
