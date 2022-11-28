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
import Welcome from "./new-components/Welcome"
import Home from "./new-components/Home"
import Register from "./new-components/Register"
import Head from "./components/common/header/Head"
import Subject from "./new-components/Subject.jsx"
import Modules from "./new-components/Modules.jsx"
import Subject1 from "./new-components/Subject1"
import Module from "./new-components/Module"
import Module1 from "./new-components/Module1"
import Sub2 from "./new-components/Sub2"
import Sub3 from "./new-components/Sub3"
import Sub4 from "./new-components/Sub4"
import Sub5 from "./new-components/Sub5"
import Sub6 from "./new-components/Sub6"
import Sub7 from "./new-components/Sub7"
import Sub8 from "./new-components/Sub8"
import Module2 from "./new-components/Module2"
import Module3 from "./new-components/Module3"
import Module4 from "./new-components/Module4"
import Module5 from "./new-components/Module5"
import Module6 from "./new-components/Module6"
import Module7 from "./new-components/Module7"
import Module8 from "./new-components/Module8"
import Content from "./new-components/Content"



function App() {
  return (
    <>
      <Router>
        <Head />
        
        <Routes>

          {/* <Route path='/' element={<Welcome></Welcome>} >
            
            </Route> */}
            <Route path='/' element={<Register></Register>} />
          <Route path='/home' element={<Home></Home>} />
          <Route path="/Subject"  element={<Subject></Subject>} />
          <Route path="/Sub2"  element={<Sub2></Sub2>} />
          <Route path="/Sub3"  element={<Sub3></Sub3>} />
          <Route path="/Sub4"  element={<Sub4></Sub4>} />
          <Route path="/Sub5"  element={<Sub5></Sub5>} />
          <Route path="/Sub6"  element={<Sub6></Sub6>} />
          <Route path="/Sub7"  element={<Sub7></Sub7>} />
          <Route path="/Sub8"  element={<Sub8></Sub8>} />

          {/* <Route path="/module" element={<Module></Module> } /> */}
          {/* <Route path='/modules' element={<Modules></Modules> } /> */}
          <Route exact path='/Module1' element={<Module1></Module1>} />
          <Route exact path='/Module2' element={<Module2></Module2>} />
          <Route exact path='/Module3' element={<Module3></Module3>} />
          <Route exact path='/Module4' element={<Module4></Module4>} />
          <Route exact path='/Module5' element={<Module5></Module5>} />
          <Route exact path='/Module6' element={<Module6></Module6>} />
          <Route exact path='/Module7' element={<Module7></Module7>} />
          <Route exact path='/Module8' element={<Module8></Module8>} />
          <Route exact path='/Content' element={<Content></Content>} />

          {/* <Route exact path='/courses' element={CourseHome} /> */}
          {/* <Route exact path='/team' component={Team} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/journal' component={Blog} />
          <Route exact path='/contact' component={Contact} /> */}
        </Routes>
        
        {/* <Footer /> */}
      </Router>
      <Subject1 />
    </>
  )
}

export default App
