import React from "react";
import {Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Book from './chapter03/book';
import Clock from "./chapter04/clock";
import CommentList from "./chapter05/js/CommentList";
import NotificationList from "./chapter06/js/NotificationList";
import ProfileCard from "./chapter13/js/ProfileCard";
import Calculator from "./chapter12/js/Calculator";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to = "./book">Book</Link><br />
        <Link to = "./clock">Clock</Link><br />
        <Link to = "./commentlist">CommentList</Link><br />
        <Link to = "./NotificationList">NotificationList</Link><br />
        <Link to = "./Calculator">Calculator</Link><br />
        <Link to = "./ProfileCard">ProfileCard</Link><br />
      </header>
        <Routes>
            <Route exact path="./book" component={Book}></Route>
            <Route exact path="./clock" component={Clock}></Route>
            <Route exact path="./commentlist" component={CommentList}></Route>
            <Route exact path="./NotificationList" component={NotificationList}></Route>
            <Route exact path="./Calculator" component={Calculator}></Route>
            <Route exact path="./ProfileCard" component={ProfileCard}></Route>
        </Routes>
    </div>
  );
}

export default App;
