import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'
import ContactPage from "./Components/Contact/ContactPage.jsx"
import AboutPage from "./Components/about/AboutPage.jsx"
import  CountryPage from "./Components/Country/CountryPage.jsx"
 import  HomePage from "./Components/Home/HomePage.jsx"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/country" element={<CountryPage />} />
         <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
           <Route path="/" element={<HomePage />} />
  
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
