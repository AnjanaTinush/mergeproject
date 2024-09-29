import React from "react";
import "./App.css";
import Maincview from "./Components/courseComponent/Studentcourseview/Maincview";
import Header from "./Components/courseComponent/Nav/Header";
import CourseView from "./Components/courseComponent/Studentcourseview/CourseView";
import Cportfolio from "./Components/courseComponent/Universitycouses/Cportfolio";
import UcourseView from "./Components/courseComponent/Universitycouses/Ucousreview";
import UpdateCourseForm from "./Components/courseComponent/Universitycouses/UpdateCourseForm";
import AddCourseForm from "./Components/courseComponent/Universitycouses/AddCourseForm";

// import QuestionList from "./components/QuestionList";
// import QuestionForm from "./components/QuestionForm";
// import QuestionDetail from "./components/QuestionDetail";
// import GeneratedPaper from "./components/GeneratedPaper";
// import StudentResults from "./components/StudentResults";
import QuestionList from "./Components/examComponent/QuestionList";
import QuestionForm from "./Components/examComponent/QuestionForm";
import QuestionDetail from "./Components/examComponent/QuestionDetail";
import GeneratedPaper from "./Components/examComponent/GeneratedPaper";
import StudentResults from "./Components/examComponent/StudentResults";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
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
      </Routes>
    </>
  );
}

export default App;
