import React from "react";
import "./App.css";
import Maincview from "./Components/courseComponent/Studentcourseview/Maincview";
import Header from "./Components/courseComponent/Nav/Header";
import CourseView from "./Components/courseComponent/Studentcourseview/CourseView";
import Cportfolio from "./Components/courseComponent/Universitycouses/Cportfolio";
import UcourseView from "./Components/courseComponent/Universitycouses/Ucousreview";
import UpdateCourseForm from "./Components/courseComponent/Universitycouses/UpdateCourseForm";
import AddCourseForm from "./Components/courseComponent/Universitycouses/AddCourseForm";
import Home from "./Components/workComponent/Home/Home";
import Register from "./Components/workComponent/Register/Register";
import Update from "./Components/workComponent/Update/Update";

//visa
import Visa from "./Components/visaComponent/Home/Home";
import UserDeatils from "./Components/visaComponent/UserDetails/UserDetails";
import AddUser from "./Components/visaComponent/AddUser/AddUser";
import UpdateUser from "./Components/visaComponent/UpdateUser/UpdateUser";
import DocumentUpload from "./Components/visaComponent/DocumentUpload/DocumentUpload";
import ProcessTracking from "./Components/visaComponent/ProcessTracking/ProcessTracking"
import EVisa from "./Components/visaComponent/EVisa/EVisa";



import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
     
        <Routes>
          {/* Course Routes */}
          <Route path="/course-page" element={<Maincview />} />
          <Route path="/course-view/:id" element={<CourseView />} />
          <Route path="university-portfolio" element={<Cportfolio />} />
          <Route path="university-course/:id" element={<UcourseView />} />
          <Route path="course-update/:id" element={<UpdateCourseForm />} />
          <Route path="add-course" element={<AddCourseForm />} />

          {/* Work Routes */}
          <Route path="/workregister" element={<Register />} />
          <Route path="/addworkers" element={<Home />} />
          <Route path="/workersupdate" element={<Update />} />
          <Route path="/adduser" element={<AddUser/>} />


           {/*Visa Routes */}
           <Route path="/visa" element={<Visa/>} />
           <Route path="/mainhome" element={<Home />} />
           <Route path="/userdetails" element={<UserDeatils/>} />
           <Route path="/docupload" element={<DocumentUpload />} />
           <Route path="/userdetails/:id" element={<UpdateUser />} />
           <Route path="/adduser" element={<AddUser/>} />
           <Route path="/Tracking" element={<ProcessTracking />} />
           <Route path="/Evisa" element={<EVisa />} />

        </Routes>
     
    </>
  );
}

export default App;
