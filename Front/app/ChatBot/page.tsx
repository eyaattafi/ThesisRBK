"use client";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import ChatPage from "../chatClient/page";
import './chat.css'
import axios from "axios";

export default function Home({user,admin}:any) {
  
  useEffect(() => {
    axios.get(`http://localhost:3000/api/allChat`)
      .then(e=>{
         setChat(e.data)
      }).catch(error=>console.error(error))
    },[])

    

  const idadmin=localStorage.getItem(("idadmin"))
  const id=localStorage.getItem("id")
  const [showChat, setShowChat] = useState(false);
  const [chat, setChat] = useState([]);
  const [iduser, setIduser] = useState(id || user);
  const [show, setShow] = useState(false);
  const [idchat, setIdchat] = useState(0);
  const [adminId,setAdminId]=useState(idadmin  )
  var socket: any;
  socket = io("http://localhost:7000");
  console.log(socket,"sockeeeeeet");

  const handleJoin = () => {
    if(!idadmin){setIdchat(chat.length+1)}
      socket.emit("chat", idchat);
      setShow(true);
      setShowChat(true);
      
  };

  return (
    <div>
      <div
        className="main_div"
        style={{ display: showChat ? "none" : "" }} >
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