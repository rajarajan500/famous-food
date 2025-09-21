import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <>
      <div className='flex gap-20 text-lg px-2 py-2 justify-center text-blue-300 hover:text-blue-600'>
        <Link to="/">IND</Link>
        <Link to="/usa">USA</Link>
        <Link to="/china">CHINA</Link>
        <Link to="/singapore">SINGAPORE</Link>
      </div>
    </>
  )
}

export default Navigation