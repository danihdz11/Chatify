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
        <button 
        className='cursor-pointer'
        onClick={() => handleConection('on')}>Connect</button>

        <button 
        className='cursor-pointer'
        onClick={() => handleConection('off')}>Disconnect</button>
    </div>
  )
}

export default ManageConnection