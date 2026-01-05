import React, { useRef, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Agencies from './pages/Agencies'
import Navbar from './common/Navbar'
import FullscreenNav from './common/FullscreenNav'


const App = () => {

  const [isFullscreenNav, setIsFullscreenNav] = useState(false)

  return (
    <div>
      <Navbar setIsFullscreenNav={setIsFullscreenNav} />
      {isFullscreenNav && <FullscreenNav setIsFullscreenNav={setIsFullscreenNav} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/agencies" element={<Agencies />} />
      </Routes>
    </div>
  )
}

export default App
