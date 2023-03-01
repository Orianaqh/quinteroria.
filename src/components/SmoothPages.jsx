import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from "framer-motion";
// PAGES und COMPONENTS
import Home from './Home'
import Projects from '../pages/Projects'
import Jobsy from '../pages/Jobsy'
import NotFound from '../pages/NotFound'
import Chor from '../pages/Chor';
import Bitte from '../pages/Bitte';

function SmoothPages() {
  const location = useLocation()

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/projects/jobsy' element={<Jobsy/>}/>
        <Route path='/projects/chor' element={<Chor/>}/>
        <Route path='/projects/bitte' element={<Bitte/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </AnimatePresence>
  )
}

export default SmoothPages