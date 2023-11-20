import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='py-8 shadow-md bg-white'>
      <div className='container mx-auto flex items-center justify-between'>
        <div className='text-black text-lg font-bold'>
        <Link to="/"><img className='w-40 h-18' src='https://i.hizliresim.com/97rsw92.png' /></Link>
        </div>
        <div className=''>
          <Link to="/"><a className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2' href="#">Anasayfa</a></Link>
          <Link to="/About"><a className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2' href="#">Hakkımızda</a></Link>
          
          
        </div>
      </div>
    </div>
  )
}

export default Header