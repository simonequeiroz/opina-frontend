import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Importando as páginas
import Home from './pages/Home'
import Login from './pages/Login'
import Feedback from './pages/Feedback'
import Upload from './pages/Upload'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </Router>
  )
}

export default App
