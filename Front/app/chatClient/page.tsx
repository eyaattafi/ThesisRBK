"use client"
import React, { useEffect, useState } from "react";
import style from"./chat.module.css"
import axios from "axios";

interface IMsgDataTypes {
  idchat:  number;
  admin_idadmin:  number;
  user_iduser:  number;
  content: String;
}
interface userDataTypes {
//   userName:string;
  user_image:string;
}

const ChatPage = ({ socket, iduser, idchat,admin }: any) => {
  console.log(socket);
  
  const [currentMsg, setCurrentMsg] = useState("");
  const [chat, setChat] = useState<IMsgDataTypes[]>([]);
//   const [user,setUser]=useState<userDataTypes[]>([]);
  const sendData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentMsg !== "") {
      const msgData: IMsgDataTypes = {
         idchat:idchat, admin_idadmin:admin , user_iduser: iduser , content: currentMsg,
      };
      
      await socket.emit("send_msg", msgData);
      setCurrentMsg("");
    }
  };
console.log("eyaaaaaaaaaaaa",idchat)

  useEffect(() => {
    socket.on("receive_msg", (data: IMsgDataTypes) => {
      setChat((pre) => [...pre, data]);
    });
  }, [socket]);
console.log(chat);


  return (
    <div className={style.chat_div}>
      <div className={style.chat_border}>
        <div style={{ marginBottom: "1rem" }}>
          <p>
            Name : {/* Name: <b>${user.userName}</b> */}
          </p>
        </div>
        <div>
          {chat.map(({ idchat, user_iduser, content }, key) => (
            <div
              key={key}
              className={
                user_iduser == iduser ? style.chatProfileRight : style.chatProfileLeft
              }
            >
              <span
                className={style.chatProfileSpan}
                style={{ textAlign: user_iduser == iduser ? "right" : "left" }}
              >
                {/* {<img src={user.image_user} alt="" />} */}
                {user_iduser}
              </span>
              <h3 style={{ textAlign: user_iduser == iduser ? "right" : "left" }}>
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