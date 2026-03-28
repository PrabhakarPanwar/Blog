import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Contact from './pages/Contact'
import SingleBlog from './pages/SingleBlog'
import { ToastContainer } from 'react-toastify'
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'
import Topic from './pages/Topic'
import Footer from './components/Footer'

function App() {
  return (
    <div className='w-[80%] mx-auto'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topic" element={<Topic />} />
        <Route path="/topic/:id" element={<SingleBlog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/login" element={<Login />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App