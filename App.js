import { useState } from 'react';
import './App.css';
import {React} from 'react';
import Form from './Form.js'
import Land from './Land.js'
import { BrowserRouter as Router, 
  Route, Routes} from "react-router-dom";

 const App = () => {

   return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Land/>} />
        <Route exact path="/form" element={<Form/>} />
      </Routes>
    </Router>

    </>

   );
 }
 
 export default App;
