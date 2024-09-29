const express = require("express");
const mongoose = require("mongoose");
//cours
const courseRouter = require("./Routes/courseRoute/CourseRoutes");
const universityRouter = require("./Routes/courseRoute/UniversityRoutes");
//workers
const UserRoutes=require('./Routes/workRoute/UserRoute');

const app = express();
const cors = require("cors");

//cours
app.use(express.json());
app.use(cors());
app.use("/courses", courseRouter);
app.use("/universities", universityRouter);
app.use('/UserUploads',express.static("UserUploads/"));

//workers
app.use('/auth',UserRoutes);




mongoose.connect("mongodb+srv://ebuysl:ebuysl@cluster0.1awm1om.mongodb.net/curd-database")
.then(() => console.log("Connected to MongoDB"))
.then(() => {
    app.listen(5000);
})
.catch((err) => console.log(err));