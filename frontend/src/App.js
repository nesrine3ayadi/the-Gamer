import React, { useEffect } from "react";
import "./App.css";
import Register from "./Components/Registration/Register";
import Login from "./Components/Login/Login";
import { Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";

import Profile from "./Components/Profile/profile";
import Join from "./Components/Chat/Join";
import Chat from "./Components/Chat/Chat";
import EditProfile from "./Components/Edit Prolfile/EditProfile";
import StreamShow from "./Components/LiveStreaming/ShowStreaming";
import StreamCreate from "./Components/LiveStreaming/ShowStreaming"
import StreamDelete from "./Components/LiveStreaming/ShowStreaming"
import StreamEdit  from "./Components/LiveStreaming/ShowStreaming"
import StreamList  from "./Components/LiveStreaming/ShowStreaming"
import Header from "./Components/LiveStreaming/Header"
import { Switch, Router } from "react-router-dom";
import history from "./History"


  
function App(props) {
  return (
    <div className="App">
      <Router history={history}>
        <Header/>
      <Switch  >
      <Route exact path="/register" component={Register}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/home" component={HomePage}></Route>
      <Route exact path="/profile/:idUser" component={Profile}></Route>
      <Route exact path="/join" component={Join}></Route>
      <Route path="/chat" component={Chat}></Route>
      <Route path="/editProfile/:idUser" component={EditProfile}></Route>

     
      <Route path="/" exact component={StreamList} />
      <Route path="/streams/new" exact component={StreamCreate} />
      <Route path="/streams/edit/:id" exact component={StreamEdit} />
      <Route path="/streams/delete/:id" exact component={StreamDelete} />
      <Route path="/streams/:id" exact component={StreamShow} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
