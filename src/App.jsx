import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectSignLanguage from './pages/ProjectSignLanguage';
import ProjectSmartFarm from './pages/ProjectSmartFarm';
import ProjectSafetyAI from './pages/ProjectSafetyAI';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/sign-language" element={<ProjectSignLanguage />} />
        <Route path="/projects/smart-farm" element={<ProjectSmartFarm />} />
        <Route path="/projects/safety-ai" element={<ProjectSafetyAI />} />
      </Routes>
    </Router>
  );
}

export default App;
