"use client"
import React, { useEffect, useState } from "react";
import style from"./chat.module.css"
import axios from "axios";
interface IMsgDataTypes {
  idchat:  number;
  admin_idadmin:  number;
  client_id:  number;
  content: String;
}
interface userDataTypes {
//   userName:string;
  user_image:string;
}

const ChatPage = ({ socket, userId, idchat,idadmin }: any) => {
  console.log(socket);
  
  const [currentMsg, setCurrentMsg] = useState("");
  const [chat, setChat] = useState<IMsgDataTypes[]>([]);
  const [user,setUser]=useState<userDataTypes[]>([]);
  const sendData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentMsg !== "") {
      const msgData: IMsgDataTypes = {
        idchat,
        admin_idadmin:idadmin,
        client_id: userId,
        content: currentMsg,
      };
      await socket.emit("send_msg", msgData);
      setCurrentMsg("");
    }
  };


  useEffect(() => {
    socket.on("receive_msg", (data: IMsgDataTypes) => {
      setChat((pre) => [...pre, data]);
    });
  }, [socket]);
console.log(chat);

useEffect(() => {
  axios.get(`http://localhost:3000/api/allUsers/${userId}`)
    .then(e=>{
       setUser(e.data)
    }).catch(error=>console.error(error))
  },[userId])

  return (
    <div className={style.chat_div}>
      <div className={style.chat_border}>
        <div style={{ marginBottom: "1rem" }}>
          <p>
            Name : {/* Name: <b>${user.userName}</b> */}
          </p>
        </div>
        <div>
          {chat.map(({ idchat, client_id, content  }, key) => (
            <div
              key={key}
              className={
                client_id == userId
                  ? style.chatProfileRight
                  : style.chatProfileLeft
              }
            >
              <span
                className={style.chatProfileSpan}
                style={{ textAlign: client_id == userId ? "right" : "left" }}
              >
                {/* {<img src={user.image_user} alt="" />} */}
                {client_id}
              </span>
              <h3 style={{ textAlign: client_id == userId ? "right" : "left" }}>
                {content}
              </h3>
            </div>
          ))}
        </div>
        <div>
          <form onSubmit={(e) => sendData(e)}>
            <input
              className={style.chat_input}
              type="text"
              value={currentMsg}
              placeholder="Type your message.."
              onChange={(e) => setCurrentMsg(e.target.value)}
            />
            <button className={style.chat_button}>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;