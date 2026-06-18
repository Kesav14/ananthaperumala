import { useState } from 'react'
import Header from './Header'
import HomePage from './Home/Home'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return(
    <>
    
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<HomePage />} ></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
