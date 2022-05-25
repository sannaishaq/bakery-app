import React from 'react'
import vid from '../Assets/vid.mp4'

const Main = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>
        <video src={vid} autoPlay loop muted />
    
    </div>
  )
}

export default Main