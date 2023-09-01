import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import './App.css';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route
            exact
            path='/'
            Component={Home}
          />
          <Route
            path='/products'
            Component={Products}
          />
           <Route
            path='/services'
            Component={Services}
          />
          <Route
            path='/sign-up'
            Component={SignUp}
          />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
