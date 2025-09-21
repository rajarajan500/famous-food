import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './components/Title'
import Navigation from './components/Navigation'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Ind from './components/Ind'
import Usa from './components/Usa'
import China from './components/China'
import Sng from './components/Sng'
import Foodcard from './components/Foodcard'

function App() {

  return (
    <>
      <Title/>
            <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<><Ind Foodcard={<Foodcard/>}/></>} />
          <Route path="/usa" element={<><Usa/></>} /> 
          <Route path="/china" element={<><China/></>} /> 
          <Route path="/singapore" element={<><Sng/></>} /> 
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
