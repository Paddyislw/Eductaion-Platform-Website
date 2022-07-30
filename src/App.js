import React from 'react'
import Blog from './Components/Blog'
import Cta from './Components/Cta'
import Features from './Components/Features'
import Footer from './Components/Footer'
import NavBar from './Components/NavBar'
import PopularCourses from './Components/PopularCourses'
import Testimonial from './Components/Testimonial'
import HomePage from './Components/HomePage'

export default function App() {
  return (
    <div className=''>
      <NavBar />
      <HomePage />
      <PopularCourses />
      <Testimonial />
      <Features />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}
