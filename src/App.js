import React from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import { RoutesLayoutMarcaniChoque } from './routes/RoutesLayoutMarcaniChoque';
import './App.css';
import { NavbarMarcaniChoque } from "./routes/NavbarMarcaniChoque";
 function App() { 
  return (
     <div className="App"> 
     <BrowserRouter> 
     <NavbarMarcaniChoque/>
      {/* <RoutesLayoutMarcaniChoque /> */} 
      </BrowserRouter> </div> );
} 
export default App;