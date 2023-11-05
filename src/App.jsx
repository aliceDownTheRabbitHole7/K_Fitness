import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import About from './pages/about/About'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Routes>
        <Route exact path='/' element={(<Home />)} />
        <Route path='/about' element={(<About />)} />
        <Route path='/contact' element={(<Contact />)} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
