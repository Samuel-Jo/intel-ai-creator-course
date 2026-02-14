import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectMarketingAI from './pages/ProjectMarketingAI';
import ProjectSmartFarm from './pages/ProjectSmartFarm';
import ProjectSafetyAI from './pages/ProjectSafetyAI';

import ScrollToTop from './components/ScrollToTop';
import CountdownBar from './components/CountdownBar';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <CountdownBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/marketing-ai" element={<ProjectMarketingAI />} />
        <Route path="/projects/smart-farm" element={<ProjectSmartFarm />} />
        <Route path="/projects/safety-ai" element={<ProjectSafetyAI />} />
      </Routes>
    </Router >
  );
}

export default App;
