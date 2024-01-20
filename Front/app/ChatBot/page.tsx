"use client";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import ChatPage from "../chatClient/page";
import './chat.css'
import axios from "axios";

export default function Home({user,company}:any) {
  
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
  const [userId, setUserId] = useState(id || user);
  const [showSpinner, setShowSpinner] = useState(false);
  const [idchat, setIdchat] = useState(0);
  const [adminId,setAdminId]=useState(idadmin  )
  var socket: any;
  socket = io("http://localhost:7000");
console.log(socket,"socket");



  const handleJoin = () => {
    if(!idadmin){setIdchat(chat.length+1)}
 
      socket.emit("join_chat", idchat);
      setShowSpinner(true);

      setTimeout(() => {
        setShowChat(true);
        setShowSpinner(false);
      }, 2000);
   
  };

  return (
    <div>
           

      <div
        className="main_div"
        style={{ display: showChat ? "none" : "" }}
      >
       
        <button className="main_button" onClick={() => handleJoin()}>
          {!showSpinner ? (
            "How you can send us a message"
          ) : (
            <div className="loading_spinner"></div>
          )}
        </button>
      </div>
      <div style={{ display: !showChat ? "none" : "" }}>
        <ChatPage socket={socket} idchat={idchat} iduser={userId}  adminId={adminId}/>
      </div>
    </div>
  );
}