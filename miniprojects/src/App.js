import './App.css';
import React from 'react';
import Home from './components/home/home';
import { Route, Routes } from "react-router-dom";
import Calculator from './components/projects/calculator/calculator';
import TodoList from './components/projects/todoList/todoList';
import Nav from './components/nav/nav';
import ClockTimer from './components/projects/timer/timer';

function App() {

  return (
    <div>

      <Routes >
        <Route path="/" element={<> <Nav /> <Home /> </>} />
        <Route path="/calculator" element={<> <Nav /> <Calculator /></>} />
        <Route path="/timer" element={<> <Nav /> <ClockTimer/> </>} />
        <Route path="/todolist" element={<> <Nav /> <TodoList /></>} />
      </Routes>

    </div>
  );
}

export default App;
