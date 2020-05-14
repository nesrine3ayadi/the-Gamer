import React from "react";
import io from 'socket.io-client'
export const CTX = React.createContext();


const initState = {
    general:[
        { from:"mohamed", msg:"hello general"}, 
        { from:"anas", msg:"hello general"}, 
        { from:"nesrine", msg:"hello general"}, 
     ],
     topic2:[
        { from:"mohamed", msg:"hello Topic2"}, 
        { from:"anas", msg:"hello Topic 2"}, 
        { from:"nesrine", msg:"hello Topic2"}, 
        
     ]
}


function reducer(state, action) {
    const {from, msg, topic} = action.payload;
  switch (action.type) {
    case "RECIEVE_MESSAGE":
      return {
          ...state,[topic]:[
              ...state[topic],
              {
                  from,
                  msg,
                 
              }
           ]
      };
    default:
      return state;
  }
}
let socket;

function sendChatAction (value){
    socket.emit('chat message', value);
}


function Store(props) {
    const [allChats, dispatch] = React.useReducer(reducer, initState);

    if(!socket){
        socket = io(':5000')
        socket.on('chat message', function(msg){
            console.log(msg)
            dispatch({type:'RECIEVE_MESSAGE', payload: msg})
          });
    }
    const user = 'Mohamed' + Math.random(100).toFixed(2)

  return <CTX.Provider value={{allChats, sendChatAction, user}}>{props.children}</CTX.Provider>;
}

export default Store;
