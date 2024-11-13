// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PredictorPage from './pages/Prediction';
import Dashboard from './pages/Dashboard';
import AboutUs from './pages/About';

function App() {
  return (
    <Router>


      <Routes>
        {/* Define the route for the predictor page */}
        <Route path="/predict" element={<PredictorPage />} />
        {/* Add other routes here if needed */}
        <Route path='/about' element={<AboutUs/>}/>
        <Route path="/" element={<Dashboard />} /> {/* HomePage as default */}
      </Routes>
    </Router>
  );
}

export default App;
