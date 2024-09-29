import React from "react";
import "./App.css";
import Maincview from "./Components/courseComponent/Studentcourseview/Maincview";
import Header from "./Components/courseComponent/Nav/Header";
import CourseView from "./Components/courseComponent/Studentcourseview/CourseView";
import Cportfolio from "./Components/courseComponent/Universitycouses/Cportfolio";
import UcourseView from "./Components/courseComponent/Universitycouses/Ucousreview";
import UpdateCourseForm from "./Components/courseComponent/Universitycouses/UpdateCourseForm";
import AddCourseForm from "./Components/courseComponent/Universitycouses/AddCourseForm";

import QuestionList from "./Components/examComponent/QuestionList";
import QuestionForm from "./Components/examComponent/QuestionForm";
import QuestionDetail from "./Components/examComponent/QuestionDetail";
import GeneratedPaper from "./Components/examComponent/GeneratedPaper";
import StudentResults from "./Components/examComponent/StudentResults";
import ExamView from "./Components/examComponent/examandResultComponent/ExamView";
import Results from "./Components/examComponent/examandResultComponent/Results";

import Add from "./Components/universityComponent/Add";
import AdminProfile from "./Components/universityComponent/AdminProfile";
import AllUniversities from "./Components/universityComponent/AllUniversities";
import AllStudents from "./Components/universityComponent/AllStudents";
import Login from "./Components/universityComponent/Login";
import UniversityLogin from "./Components/universityComponent/UniversityLogin";
import UniProfile from "./Components/universityComponent/UniProfile";
import UpdateUniversity from "./Components/universityComponent/UpdateUniversity";

import { Route, Routes } from "react-router-dom";
import Menu from "./Components/universityComponent/Menu";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/course-page" element={<Maincview />} />
        <Route path="/course-view/:id" element={<CourseView />} />

        <Route path="university-portfolio" element={<Cportfolio />} />
        <Route path="university-Course/:id" element={<UcourseView />} />
        <Route path="course-update/:id" element={<UpdateCourseForm />} />
        <Route path="add-course/" element={<AddCourseForm />} />

        {/* examination route */}
        <Route path="/questionlist" element={<QuestionList />} />
        <Route path="/create" element={<QuestionForm />} />
        <Route path="/update/:id" element={<QuestionForm />} />
        <Route path="/question/:id" element={<QuestionDetail />} />
        <Route path="/generated-paper" element={<GeneratedPaper />} />
        <Route path="/student-results" element={<StudentResults />} />

        <Route path="/examview" element={<ExamView />} />
        <Route path="/results" element={<Results />} />

        {/* uni route */}
        <Route path="/unihome" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add" element={<Add />} />
        <Route path="/uniLog" element={<UniversityLogin />} />
        <Route path="/uniProfile" element={<UniProfile />} />
        <Route path="/updateUni/:id" element={<UpdateUniversity />} />
        <Route path="/adminProfile" element={<AdminProfile />} />
        <Route path="/profile" element={<AdminProfile />} />
        <Route path="/allUniversities" element={<AllUniversities />} />
        <Route path="/allStudents" element={<AllStudents />} />
      </Routes>
    </>
  );
}

export default App;
