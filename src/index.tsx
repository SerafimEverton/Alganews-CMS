import ReactDOM from 'react-dom/client';
import './Core/imports.css'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound404 from './app/views/NotFound404.view';
import Contact from './app/views/Contact.view';
import Home from './app/views/Home.view';
import UserView from './app/views/User.view';
import React from 'react';
import GlobalStylesCore from './Core/GlobalStyles.core';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>

      <BrowserRouter>
        <Switch>
          {/* <Route path={'/home'} exact Component={Home} />
      
      <Route path={'/usuario:userId'} exact Component={UserView} />

      <Route path={'/calc/:a/:b'} Component={CalcView} />

      <Route path={'/contact'} exact Component={Contact} />
      
      <Route Component={NotFound404} /> */}

        </Switch>
      </BrowserRouter>
      <GlobalStylesCore />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
