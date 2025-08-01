// App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Pages
import Index from './Index.jsx';
import Skills from './Skills.jsx';
import Resources from './Resources.jsx';
import Downloads from './Downloads.jsx';
import Help from './Help.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/downloads" element={<Downloads />} />
      <Route path="/help" element={<Help />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
