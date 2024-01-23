"use client";
import { io } from "socket.io-client";
import { useState } from "react";
import ChatPage from "../chatClient/page";
import './chat.css'
import axios from "axios";

export default function Home() {
  

  const [showChat, setShowChat] = useState(false);
  const [iduser, setIduser] = useState(0);
  const [show, setShow] = useState(false);
  const [idchat, setIdchat] = useState(0);
  const [adminId,setAdminId]=useState(1)
  var socket: any;
  socket = io("http://localhost:7000");
  console.log(socket,"sockeeeeeet");

  const handleJoin = () => {
      socket.emit("chat", idchat);
      setShow(true);
      setShowChat(true);
      
  };
console.log("heyyyyyy ",idchat)
  return (
    <div>
      <div
        className="main_div"
        style={{ display: showChat ? "none" : "" }} >
              <input
          className="main_input"
          type="text"
          placeholder="Username"
          onChange={(e:any) => setIduser(e.target.value)}
          disabled={show}
        />
        <input
          className="main_input"
          type="text"
          placeholder=" id chat "
          onChange={(e:any) => setIdchat(e.target.value)}
          disabled={show}
        />
        <button className="button" onClick={() => handleJoin()}>
          {!show ? (
            "How you can send us a message"
          ) : (
            <div className="loading"></div>
          )}
        </button>
      </div>
      <div style={{ display: !showChat ? "none" : "" }}>
        <ChatPage socket={socket} idchat={idchat} iduser={iduser}  admin={adminId}/>
      </div>
    </div>
  );
}


























