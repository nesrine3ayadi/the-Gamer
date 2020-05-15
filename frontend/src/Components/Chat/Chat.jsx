import React, { useState, useEffect } from "react";
import queryString from "query-string";
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
  const [name, setName] = useState("myname");
  const [room, setRoom] = useState("room");
  const [users, setUsers] = useState([{name:"firstname",room:"firstroom"}]);
  const [message, setMessage] = useState("welcome you piece of shit");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "localhost:5001";

  useEffect(() => {
    async function getUsers() {
      const response = await axios.get(
        `http://localhost:5000/profile/${props.id}`
      );
      setRoom(response.data.username);
     
      setName(props.current.username);
      }
    getUsers();
    socket.emit("join", {name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  
  
  });
  

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
  current: state.currentUser,
});
export default connect(mapStateToprops)(Chat);
