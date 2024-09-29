import React from "react";
import "./App.css";
import Maincview from "./Components/courseComponent/Studentcourseview/Maincview";
import Header from "./Components/courseComponent/Nav/Header";
import CourseView from "./Components/courseComponent/Studentcourseview/CourseView"
import Cportfolio from "./Components/courseComponent/Universitycouses/Cportfolio";
import UcourseView from "./Components/courseComponent/Universitycouses/Ucousreview";
import UpdateCourseForm from "./Components/courseComponent/Universitycouses/UpdateCourseForm";
import AddCourseForm from "./Components/courseComponent/Universitycouses/AddCourseForm";

import { Route, Routes } from 'react-router-dom';



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


      </Routes>
    </>
  );
}

export default App;