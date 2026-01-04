import React, { useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Agencies from './pages/Agencies'
import Navbar from './common/Navbar'


const App = () => {


  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/agencies" element={<Agencies />} />
      </Routes>
    </div>
  )
}

export default App
