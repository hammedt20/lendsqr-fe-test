import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Dashboard } from './pages/dashboard/dashboard';
import LoginPage from './pages/login/loginPage';
import { Router } from './pages/Routes/Router';
import { Userdetail } from './pages/Userdetails/Userdetail';

function App() {
  return (
    <BrowserRouter>
      {/* <LoginPage /> */}
      {/* <Dashboard /> */}
      {/* <Userdetail /> */}
      <Router />
    </BrowserRouter>
  );
}

export default App;
