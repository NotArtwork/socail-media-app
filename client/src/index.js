import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from './store';
import Login from './Login';
import NavBar from './NavBar';
import ForgotPassword from './ForgotPassword';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/home' element={<App />} />
      <Route path='/login' element={<Login />} />
      <Route path='/forgot_password' element={<ForgotPassword />} />
    </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
