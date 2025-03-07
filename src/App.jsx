import React from 'react'
import { BrowserRouter as Router,Routes,  Route } from 'react-router-dom'
import './App.css'
import Register from './assets/pages/Register'

function App() {


  return (
    <main>
    <Router>
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
    </main>
  )
}

export default App
