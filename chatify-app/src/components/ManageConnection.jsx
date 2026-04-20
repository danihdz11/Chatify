import React from 'react'
import { socket } from '../../socket'

const ManageConnection = () => {
    const handleConection = (con) => {
      console.log({ con })

        switch (con) {
            case 'on':
                socket.connect()
                break
            case 'off':
                socket.disconnect()
                break
            default:
                break
        }
    }

  return (
    <div>
        <div className='flex gap-7'>
            <button 
            className='cursor-pointer border-2 border-black py-4 px-5 rounded-full text-lg'
            onClick={() => handleConection('on')}>Connect</button>

            <button 
            className='cursor-pointer border-2 border-black py-4 px-5 rounded-full text-lg'
            onClick={() => handleConection('off')}>Disconnect</button>
        </div>
    </div>
  )
}

export default ManageConnection