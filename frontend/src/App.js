import React, {useEffect} from 'react';
import './App.css';
import Register from './Components/Registration/Register';
import Login from './Components/Login/Login';
import { Route } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Store from './Components/Chat/Store'

import Profile from './Components/Profile/profile';


function App(props) {

  return (
    <div className="App">
    <Store>
 
       <Route exact path ="/register" component={Register}></Route>
       <Route exact path ="/login" component={Login}></Route>
       <Route exact path = "/home" component={HomePage}></Route>
       <Route exact path = "/profile/:idUser" component={Profile}></Route>
       </Store>
    </div>
  );
}

export default App;
