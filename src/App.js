import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./new-components/Home"
import Register from "./new-components/Register"
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Register></Register>} />
          <Route path='/home' element={<><h1>Home</h1></>} />
          {/* <Route path="/"  element={<Home></Home>} /> */}
          {/* <Route path='/' element={Home} ></Route> */}
          {/* <Route exact path='/about' element={About} /> */}
          {/* <Route exact path='/courses' element={CourseHome} /> */}
          {/* <Route exact path='/team' component={Team} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/journal' component={Blog} />
          <Route exact path='/contact' component={Contact} /> */}
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  )
}

export default App
