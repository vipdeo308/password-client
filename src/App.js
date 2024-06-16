// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your components
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword'; // Assuming you have this component
import Home from './components/Home'; // Your home component
import Login from './components/Login'; // Your login component
import Register from './components/Register'; // Your login component

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
          <Route path="/reset-password/:token" element={<ResetPassword/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
