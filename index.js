const express = require("express");
const Student = require("./models/studentModel");
const app = express();
const PORT = 5000;

app.use(express.json());

require("./db.js");


app.post("/student", async (req, res) => {
  try {
    const data = req.body;
    const createdStudent = new Student(data);
    await createdStudent.save();

    res.send("Student created");
  } catch (error) {
    console.log(error);
  }
});


app.get("/student", async (req, res) => {
  try {
  
    const StudentList = await Student.find();
    res.send(StudentList);
  } catch (error) {
    console.log(error);
  }
});


app.put("/student/:id", async (req, res) => {
  try {
  
    const StudentId = req.params.id;
    await Student.updateOne({id:StudentId},{$set:req.body});
    res.send("sTUDENT UPDATED")
  } catch (error) {
    console.log(error);
  }
});

app.delete("/student/:id", async (req, res) => {
  try {
    await Student.deleteOne({id: req.params.id});
    res.send("sTUDENT DELETED")
  } catch (error) {
    console.log(error);
  }
});


app.listen(PORT, function () {
  console.log(`server is running on local host:${PORT}`);
});