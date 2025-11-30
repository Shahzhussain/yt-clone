import React, { useState } from 'react'
import Home from './pages/home/home'
import Navbar from './components/navbar/navbar'

import Video from './pages/video/video'
import { Route, Routes } from 'react-router-dom'
const App = () => {
  const [sidebar,setSidebar]=useState(true);

  return (
    <div>
      <Navbar setSidebar={setSidebar}/>
     
      <Routes>
        <Route path='/' element={ <Home sidebar={sidebar}/>}/>
        <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
      </Routes>
      </div>
  )
}

export default App