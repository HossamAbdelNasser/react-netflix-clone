import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Watch from "./pages/Watch/Watch";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>

      </Routes>
       
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);