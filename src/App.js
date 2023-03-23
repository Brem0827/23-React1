import React from "react";
import {Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Book from './chapter03/book';
import Clock from "./chapter04/clock";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to = "./book">Book</Link>
        <Link to = "./clock">Clock</Link>
      </header>
        <Routes>
            <Route exact path="./book" component={Book}></Route>
            <Route exact path="./clock" component={Clock}></Route>
        </Routes>
    </div>
  );
}

export default App;
