
import React, { useEffect } from 'react';
import HOMEE from './components/Home'

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
    AOS.init({
      // Global settings for AOS (optional)
      duration: 3000, once: true, // Whether animation should happen only once while scrolling down
    });
  }, []); // Ensure this useEffect runs only once after component mount
 
  return (
    <>
     
      
     
      <Router>
      <Routes>
     
      <Route exact path='/' element={<HOMEE/>}/>
      
      </Routes>
      </Router>

      
    </>
  )
}

export default App
