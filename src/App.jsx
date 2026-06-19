import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import HomePage from './Home/Home'
import AOS from "aos";
import { useEffect } from 'react';
import "aos/dist/aos.css";
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  useEffect(() => {
  AOS.init({
    duration: 500,
    once: true,
  });
  }, []);
  return(
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<HomePage />} ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
