import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { connect } from "react-redux";
import TextContainer from "./TextContainer";
import Messages from "./Messages/Messages";
import InfoBar from "./InfoBar";
import Input from "./Input";
import axios from "axios";

import "./Chat.scss";

let socket;

const Chat = (props) => {
  const [name, setName] = useState('visitor'+Date.now());
  const [room, setRoom] = useState('room');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'localhost:5001';

  useEffect(() => {
    async function getUsers() {
      const response = await axios.get(
        `http://localhost:5000/profile/${props.idprofile}`
      );
       setRoom(response.data.username)
      }
    
    getUsers();
    // setName(props.current.username);
    // setRoom("room")
    setName(props.current.username)
    socket = io(ENDPOINT);
    socket.emit("join", {name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  
  
  },[ENDPOINT,name]);
  

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="outerContainer">
      <div
        className="container"
        style={{ flexDirection: "column", background: "white" }}
      >
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      <TextContainer users={users} />
    </div>
  );
};
const mapStateToprops = (state) => ({
  current: state.currentUser
});
export default connect(mapStateToprops)(Chat);
