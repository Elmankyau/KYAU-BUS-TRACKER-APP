// src/AppRouter.js
import React from 'react';
import {BrowserRouter,  Routes, Route } from 'react-router-dom';


import Home from './home';
import Bus from './Bus';
import Agriculture from './Agriculture';
import Tourism from './Tourism';
import Healthcare from './Healthcare';
function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' Component={Home}/>
            <Route path='/transportation' Component={Bus}/>
            <Route path='/agriculture' Component={Agriculture}/>
            <Route path='/tourism' Component={Tourism}/>
            <Route path='/healthcare' Component={Healthcare}/>
            
        </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
