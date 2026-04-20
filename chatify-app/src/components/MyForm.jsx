import React, { useState } from 'react'
import { socket } from '../../socket'

const MyForm = () => {

    const [message, setMessage] = useState('')

    const handleOnChange = (e) => {
        setMessage(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault()
        socket.emit('chat message', message)
        setMessage('')
    }

  return (
    <div>
        <div className='flex gap-2 p-2 border-t'>
            <input 
                className='flex-1 border px-3 py-2 rounded-3xl'
                type="text"
                name='message'
                value={message}
                onChange={handleOnChange} 
            />
            <button 
            className='px-4 py-2 bg-black text-white rounded-full cursor-pointer hover:bg-sky-700'
            onClick={handleClick}>Send</button>
        </div>
    </div>
  )
}

export default MyForm