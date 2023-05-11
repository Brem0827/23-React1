import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import Clock from './chapter04/clock';
import reportWebVitals from './reportWebVitals';
import CommentList from './chapter05/js/CommentList';
import NotificationList from './chapter06/js/NotificationList';
import ProfileCard from './chapter13/js/ProfileCard';
import Calculator from './chapter12/js/Calculator';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="clock" element={<Clock />} />
        <Route path="CommentList" element={<CommentList />} />
        <Route path="NotificationList" element={<NotificationList />} />
        <Route path="ProfileCard" element={<ProfileCard />} />
        <Route path="Calculator" element={<Calculator />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
