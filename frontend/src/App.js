import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Redirect from './components/Redirect';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/:id' element={<Redirect />} />
        <Route path='*' element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
