import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FormPage } from './pages/Form';
import { StatementPage } from './pages/StatementPage';
function App() {
  return (
   
    <Routes>
      <Route path="/" element={<StatementPage/>} />
      <Route path="/form" element={<FormPage />} />
    </Routes>
  );
}

export default App;
