import Header from './Header'
import Footer from './Footer'
import HomePage from './Home/Home'
import AOS from "aos";
import { useEffect } from 'react';
import "aos/dist/aos.css";
import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Gallery from './Gallery/Gallery';
import Surprise from './Surprise/Surprise';

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/surprise" element={<Surprise />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;