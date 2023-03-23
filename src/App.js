import React from "react";
import {Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Book from './chapter03/book';
import Clock from "./chapter04/clock";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to = "./chapter03/book">Book</Link>
        <Link to = "./chapter04/clock">Clock</Link>
      </header>
        <Routes>
            <Route exact path="./chapter03/book" component={Book}></Route>
            <Route exact path="./chapter04/clock" component={Clock}></Route>
        </Routes>
    </div>
  );
}

export default App;
