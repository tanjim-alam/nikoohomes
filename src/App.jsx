import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Thanks from './pages/Thanks'
import HomeP from './pages/Home'

function App() {
  function handleOpenModel(e) {
    e.preventDefault()
    document.getElementById('my_modal_3').showModal()
  }
  return (
    <Routes>
      <Route path='/' element={<HomeP />} />
      <Route path='/thank' element={<Thanks />} />
    </Routes>
  )
}

export default App
