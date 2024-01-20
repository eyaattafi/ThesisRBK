"use client"
import React, { useEffect, useState } from "react";
import style from"./chat.module.css"
import axios from "axios";
interface IMsgDataTypes {
  idchat:  number;
  admin_idadmin:  number;
  id_user:  number;
  content: String;
}
interface userDataTypes {
  fullName:string;
  image_user:string;
}

const ChatPage = ({ socket,iduser,idchat,admin_idadmin }: any) => {
  console.log(socket);
  
  const [currentMsg, setCurrentMsg] = useState("");
  const [chat, setChat] = useState<IMsgDataTypes[]>([]);
  const [user,setUser]=useState<userDataTypes[]>([]);
  const sendData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentMsg !== "") {
      const msgData: IMsgDataTypes = {
        admin_idadmin:admin_idadmin,
        iduser: iduser,
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
  axios.get(`http://localhost:3000/api/users/${iduser}`)
    .then(e=>{
       setUser(e.data)
    }).catch(error=>console.error(error))
  },[iduser])

  return (
    <div className={style.chat_div}>
      <div className={style.chat_border}>
        <div style={{ marginBottom: "1rem" }}>
          <p className="name">
            Name: <b>{user.fullName}</b>
          </p>
        </div>
        <div>
          {chat.map(({ idchat, iduser, content  }, key) => (
            <div
              key={key}
              className={
                iduser == iduser
                  ? style.chatProfileRight
                  : style.chatProfileLeft
              }
            >
              <span
                className={style.chatProfileSpan}
                style={{ textAlign: iduser == iduser ? "right" : "left" }}
              >
                {/* {<img src={user.image_user} alt="" />} */}
                {iduser}
              </span>
              <h3 style={{ textAlign: iduser == iduser ? "right" : "left" }}>
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