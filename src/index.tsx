import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound404 from './views/NotFound404.view';
import Contact from './views/Contact.view';
import Home from './views/Home.view';
import UserView from './views/User.view';
import NavBar from './components/NavBar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div>
      <NavBar />
    <BrowserRouter>
    <Switch>
      <Route path={'/home'} exact Component={Home} />
      
      <Route path={'/usuario:userId'} exact Component={UserView} />

      <Route path={'/calc/:a/:b'} Component={CalcView} />

      <Route path={'/contact'} exact Component={Contact} />
      
      <Route Component={NotFound404} />
       
    </Switch>   
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
