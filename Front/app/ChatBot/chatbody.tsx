"use client"

import { RefObject } from "react";
import ChatMessage from "./chatmsg";
import { IMsg } from "./page";
const userId = localStorage.getItem('userId');
import "./chat.css"
type IProps = {
    chat: IMsg[],
    scrollableRef: RefObject<HTMLDivElement>,
}

export default function ChatBody({ chat, scrollableRef }: IProps) {
    return (
        <div className="h">
            {chat.map((msg, index) => {
                const refProps = index == chat.length-1 ? { ref: scrollableRef } : {};
                return (
                    <ChatMessage key={index} msg={msg} refProps={refProps}/>
                );
            })}
        </div>
    );
}