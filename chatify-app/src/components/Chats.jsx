import React, { useEffect, useState } from 'react'
import { socket } from '../../socket'

const Chats = () => {
  const[message, setMessage] = useState([])

  useEffect(() => {
    socket.on('chat message', (msg, serverOffset) => {
      console.log("Mensaje desde el server: ", msg)
      socket.auth.serverOffset = serverOffset;
      setMessage((prev) => [...prev, msg])
    })
    return () => {
      socket.off('chat message')
    }
  }, [])

  return (
    <>
      <div>Chats</div>
      {message?.map((m) => (
        <p>{m}</p>
      ))}
    </>
  )
}

export default Chats