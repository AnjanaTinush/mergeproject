const express = require("express");
const mongoose = require("mongoose");
const courseRouter = require("./Routes/courseRoute/CourseRoutes");
const universityRouter = require("./Routes/courseRoute/UniversityRoutes");
const questionRoutes = require("./Routes/examRoute/question.routes");
const examRoutes = require("./Routes/examRoute/examRoutes");

const app = express();
const cors = require("cors");

//middleware
app.use(express.json());
app.use(cors());
app.use("/courses", courseRouter);
app.use("/universities", universityRouter);
app.use("/api/questions", questionRoutes);
app.use("/api", examRoutes);

mongoose
  .connect("mongodb+srv://UAS:YfuHjRSAVRwncMi4@cluster0.lrlkb.mongodb.net/")
  .then(() => console.log("Connected to MongoDB"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
