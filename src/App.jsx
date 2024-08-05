
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import RegisterPage from "./page/RegisterPage";
import NotFoundPage from "./page/NotFoundPage";
function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RegisterPage />} /> 
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/home' element={<RegisterPage />} />
        <Route path='/genres' element={<RegisterPage />} />
        <Route path='/carousel' element={<RegisterPage />} />
        <Route path='/dashboard' element={<RegisterPage />} />
        <Route path='/movie' element={<RegisterPage />} />
        <Route path='*' element={<NotFoundPage />} />
        
      </Routes>
    </BrowserRouter>
  )
    
  
}

export default App
