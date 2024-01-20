"use client"
import { io, Socket } from "socket.io-client";
import { useEffect, useRef, useState } from "react";
import ChatFooter from "./chatfooter";
import ChatHeader from "./chatheader";
import ChatBody from "./chatbody";
import "./chat.css"

export type IMsg = {
    user: boolean;
    message: string;
}

const socket: Socket = io(`ws://localhost:7000/`, {
    path: '/api/socketio',
    autoConnect: false
});


export default function ChatWindow() {

    const [chat, setChat] = useState<IMsg[]>([]);

    const scrollableRef = useRef<HTMLHeadingElement>(null);
  
    useEffect(() => {
        scrollableRef.current?.scrollIntoView({block: "nearest", inline: "start" });
    }, [chat])

    useEffect(() => {

        socket.connect();

        socket.on("connect", () => {
            console.log("SOCKET Connected", socket.id);
        })

        socket.on("message", (message:any) => {
            setChat((prevChat) => {
                return [...prevChat, { user:false, message }];
            })
        })

        return () => {
            socket.removeAllListeners();
            socket.disconnect();
        }
        
    }, []);

    return (
        <div className="f1">
            <ChatHeader />
            <ChatBody scrollableRef={scrollableRef} chat={chat} />
            <ChatFooter setChat={setChat} socket={socket} />
        </div>
    );
}