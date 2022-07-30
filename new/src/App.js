
import React from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";


import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Table from './components/Table';
import Name from './components/Name';


function App() {
  return (
    
    <Router>
    <div className="container">
    <Header />
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/name" element={<Name />} />
      <Route path="/table" element={<Table />} />
      <Route path="/about" element={<About />} />
    
    </Switch>
    </div>
  </Router>

  )
}

export default App;
