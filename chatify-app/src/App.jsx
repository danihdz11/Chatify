import { useEffect, useState } from 'react'
import './App.css'
import { socket } from '../socket'
import ManageConnection from './components/ManageConnection'
import MyForm from './components/MyForm'
import Chats from './components/Chats'
import Channels from './components/Channels'
import Users from './components/Users'

function App() {
  

  useEffect(() => {
    const onConnect = () => {
      console.log('Conectado')
    }
    socket.on('connect', onConnect)
    return () => {
      socket.off('disconnect')
      socket.off('connect', onConnect)
    }
  }, [])

  return (
    <>
      <h1 className='flex items-center justify-center text-4xl font-bold mb-8'>Chatify</h1>
      <div className='flex items-center justify-center'>
        <ManageConnection />
      </div>
      <div className='flex items-center justify-between mt-10 w-full'>
        <div className='w-1/4 h-screen border-3 border-black'>
          <Channels />
        </div>

        <div className='flex flex-col w-1/2 h-screen border-3 border-black'>
          <div className='flex-1 overflow-y-auto'>
            <Chats />
          </div>
          <MyForm />
        </div>

        <div className='w-1/4 h-screen border-3 border-black'>
          <Users />
        </div>
        

      </div>
    </>
  )
}

export default App
