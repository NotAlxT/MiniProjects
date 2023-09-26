import './App.css';
import React from 'react';
import Home from './components/home/home';
import { Route, Routes } from "react-router-dom";
import Calculator from './components/projects/calculator/calculator';
import Timer from './components/projects/timer/timer';
import TodoList from './components/projects/todoList/todoList';
import Nav from './components/nav/nav';

function App() {

  

  return (
    <div>

      <Routes >
        <Route path="/" element={<> <Nav /> <Home /> </>} />
        <Route path="/calculator" element={<> <Nav /><Calculator /></>} />
        <Route path="/timer" element={<> <Nav /><Timer /></>} />
        <Route path="/todolist" element={<> <Nav /><TodoList /></>} />
      </Routes>

    </div>
  );
}

export default App;
