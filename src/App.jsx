import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      <Routes/>
    <BrowserRouter/>  

  )
  <>  
    <h1>Hello World!</h1>

  </>
}

export default App;
