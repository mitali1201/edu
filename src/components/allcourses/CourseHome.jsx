import React from "react"
import Back from "../common/back/Back"
import CoursesCard from "./CoursesCard"
import OnlineCourses from "./OnlineCourses"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sem1_course from './Sem1_course'

const CourseHome = () => {
  return (
    <>
      <Back title='Explore Courses' />
      
      {/* <CoursesCard /> */}
      <OnlineCourses />
    </>
  )
}

export default CourseHome
