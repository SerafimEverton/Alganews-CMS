import React from 'react';
import ReactDOM from 'react-dom';
import './Core/imports.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import Home from './app/views/Home.view';
import NotFound404 from './app/views/NotFound404.view';
import EditorListView from './app/views/EditorList.view';
import PostCreateView from './app/views/PostCreate.view';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editores" element={<EditorListView />} />
          <Route path="/postform" element={<PostCreateView />} />
          <Route path="*" element={<NotFound404 />} />     
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
