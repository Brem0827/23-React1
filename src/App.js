import React from "react";
import {Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Book from './chapter03/book';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to = "./chapter03/book">Book</Link>
      </header>
        <Routes>
            <Route exact path="./chapter03/book" component={Book}></Route>
        </Routes>
    </div>
  );
}

export default App;
