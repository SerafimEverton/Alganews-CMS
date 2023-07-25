import React from 'react';
import ReactDOM from 'react-dom';
import './Core/imports.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import Home from './app/views/Home.view';
import NotFound404 from './app/views/NotFound404.view';
import Contact from './app/views/Contact.view';
import UserView from './app/views/User.view';
import CalcView from './app/views/Calc.view';
import NavBar from './app/components/NavBar';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contact />} />
          <Route path={'/usuario/:userId'} element={<UserView />} />
          <Route path={'/sum/:a/:b'} element={<CalcView />} />
          <Route path="*" element={<NotFound404 />} />     
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
