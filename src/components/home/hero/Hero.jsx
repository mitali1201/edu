import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO EDUCATIFY' title='Best Online Education Expertise' />
            <p>No need to worry about your exams anymore, we present to you the StudyHub. All in one resource collection for SET</p>
            <div className='button'>

              <Link to={"Registration"} style={{height:"50px"}} className='primary-btn'>

                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </Link>
              {/* <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button> */}
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
