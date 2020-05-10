import React from 'react';
import './App.css';
import Register from './Components/Registration/Register';
import Login from './Components/Login/Login';
import { Route } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';

function App() {
  return (
    <div className="App">
       <Route exact path ="/register" component={Register}></Route>
       <Route exact path ="/login" component={Login}></Route>
       <Route exact path = "/home" component={HomePage}></Route>
    </div>
  );
}

export default App;
