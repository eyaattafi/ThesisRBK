import Image from "next/image";
import botPic from "../../public/botPic.png"
import "./chat.css"

export default function ChatHeader() {
  return (
    <div className="f">
      <div className="border-full">
        <Image src={botPic} alt="bot" width={40}></Image>
      </div>
      <h1>GPT-3</h1>
    </div>
  );
}