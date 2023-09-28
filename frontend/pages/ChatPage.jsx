// import React from 'react'
import axios from "axios"
import { useEffect,useState } from "react"

const ChatPage = () => {
    const [chat,setChat] = useState([]);

    const fetchChats = async () => {
        const {data} = await axios.get('http://localhost:3000/api/chat')
        setChat(data);
        console.log(data)
    }
    useEffect(()=>{
        fetchChats();
    },[])

  return (
    <div>
      <h1>This is the chat page</h1>
     <div>{chat.map(chat => <div key={chat._id}>{chat.chatName}</div>)} </div>  
    </div>
  )
}

export default ChatPage
